const express = require("express");
const oracledb = require("oracledb");
const cors = require("cors");

// 1. 결과를 객체 형식으로 설정
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

// 2. Oracle DB Pool 설정
const dbConfig = {
  user: "scott",
  password: "tiger",
  connectString: "localhost:1521/xe",
  poolMin: 10,
  poolMax: 10,
  poolIncrement: 0,
  poolAlias: "APP_POOL",
};

// 3. 풀 생성 함수
async function initialize() {
  try {
    await oracledb.createPool(dbConfig);
    console.log("Oracle 연결 성공");
  } catch (err) {
    console.log("Oracle 연결 실패:", err);
    process.exit(1);
  }
}

// 4. Express 서버 설정
const app = express();
app.use(cors());
app.use(express.json());

// -----------------
// 루트 테스트
// -----------------
app.get("/", (req, res) => {
  res.send("Root 페이지 요청");
});

// -----------------
// 사원 목록 조회
// -----------------
app.get("/emp/:ename/:deptno", async (req, res) => {
  const ename = req.params.ename;
  const deptno = req.params.deptno;

  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig.poolAlias);

    const sql = `
      SELECT e.emp_no, e.emp_id, e.emp_name, e.deptno, e.hiredate, d.dept_name
      FROM ydEmployee e
      LEFT JOIN ydDepartment d ON e.deptno = d.deptno
      WHERE e.emp_name = DECODE('${ename}', 'ALL', e.emp_name, '${ename}')
        AND e.deptno = DECODE(${deptno}, -1, e.deptno, ${deptno})
      ORDER BY e.emp_no
    `;

    const result = await connection.execute(sql);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({
      error: "조회 중 오류",
      detail: err.message
    });
  } finally {
    if (connection) await connection.close();
  }
});

// -----------------
// 로그인 기능
// -----------------
app.post("/login", async (req, res) => {
  const {
    emp_id,
    emp_pw
  } = req.body;
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig.poolAlias);

    const sql = `
      SELECT emp_no, emp_id, emp_name, deptno 
      FROM ydEmployee 
      WHERE emp_id = :emp_id AND emp_pw = :emp_pw
    `;

    const result = await connection.execute(sql, {
      emp_id,
      emp_pw
    });

    if (result.rows.length > 0) {
      res.status(200).json({
        success: true,
        message: "로그인 성공",
        user: result.rows[0], // 로그인한 사용자 정보 반환
      });
    } else {
      res.status(401).json({
        success: false,
        message: "아이디 또는 비밀번호가 올바르지 않습니다",
      });
    }
  } catch (err) {
    res.status(500).json({
      error: "로그인 오류",
      detail: err.message
    });
  } finally {
    if (connection) await connection.close();
  }
});


// -----------------
// 사원 등록
// -----------------
app.post("/emp", async (req, res) => {
  const {
    emp_id,
    emp_pw,
    emp_name,
    deptno,
    hiredate
  } = req.body;
  console.log(req.body);
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig.poolAlias);

    const sql = `
      INSERT INTO ydEmployee(emp_no, emp_id, emp_pw, emp_name, deptno, hiredate)
      VALUES((SELECT NVL(MAX(emp_no), 0) + 1 FROM ydEmployee), 
      '${emp_id}', '${emp_pw}', '${emp_name}',
       ${deptno}, TO_DATE('${hiredate}', 'YYYY-MM-DD'))
    `;

    const result = await connection.execute(sql);
    await connection.commit();
    res.status(200).json({
      message: "등록 성공",
      result
    });
  } catch (err) {
    res.status(500).json({
      error: "등록 오류",
      detail: err.message
    });
  } finally {
    if (connection) await connection.close();
  }
});

// -----------------
// 사원 삭제
// -----------------
app.delete("/emp/:emp_no", async (req, res) => {
  const emp_no = req.params.emp_no;
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig.poolAlias);
    const sql = `DELETE FROM ydEmployee WHERE emp_no = ${emp_no}`;
    const result = await connection.execute(sql);
    await connection.commit();
    res.status(200).json({
      message: "삭제 성공",
      result
    });
  } catch (err) {
    res.status(500).json({
      error: "삭제 오류",
      detail: err.message
    });
  } finally {
    if (connection) await connection.close();
  }
});

// -----------------
// 개인 게시판 조회 (내 글만)
// -----------------
app.get("/myboard/:emp_no", async (req, res) => {
  const emp_no = req.params.emp_no;
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig.poolAlias);
    const sql = `
      SELECT * FROM ydmyBoard
      WHERE emp_no = ${emp_no}
      ORDER BY post_id DESC
    `;
    const result = await connection.execute(sql);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({
      error: "조회 오류",
      detail: err.message
    });
  } finally {
    if (connection) await connection.close();
  }
});

// -----------------
// 전체 게시판 조회
// -----------------
app.get("/mainboard", async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig.poolAlias);
    const sql = `
      SELECT * FROM ydmainBoard
      ORDER BY post_id DESC
    `;
    const result = await connection.execute(sql);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({
      error: "조회 오류",
      detail: err.message
    });
  } finally {
    if (connection) await connection.close();
  }
});

// -----------------
// 발신 메일 조회
// -----------------
app.get("/mail/sent/:emp_no", async (req, res) => {
  const emp_no = req.params.emp_no;
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig.poolAlias);
    const sql = `
      SELECT * FROM ydmessage
      WHERE sender_user_id = (
        SELECT emp_id FROM ydEmployee WHERE emp_no = ${emp_no}
      )
      ORDER BY msg_id DESC
    `;
    const result = await connection.execute(sql);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({
      error: "조회 오류",
      detail: err.message
    });
  } finally {
    if (connection) await connection.close();
  }
});

// -----------------
// 수신 메일 조회
// -----------------
app.get("/mail/received/:emp_no", async (req, res) => {
  const emp_no = req.params.emp_no;
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig.poolAlias);
    const sql = `
      SELECT r.*, m.title, m.content, m.sender_user_id, m.send_date
      FROM ydmessage_Recipient r
      JOIN ydmessage m ON r.msg_id = m.msg_id
      WHERE r.emp_no = ${emp_no}
      ORDER BY r.recipient_id DESC
    `;
    const result = await connection.execute(sql);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({
      error: "조회 오류",
      detail: err.message
    });
  } finally {
    if (connection) await connection.close();
  }
});

// -----------------
// 서버 시작
// -----------------
const port = 3000;
async function startServer() {
  await initialize();
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

startServer();