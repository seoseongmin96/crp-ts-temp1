import style from '@/styles/Float.module.css'
export function Register() {
    return(<>
<h2 className="text-uppercase text-center mb-5">무료로 가입하고 이용해보세요</h2>

<form>

  <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form3Example1cg">이름</label>
    <input type="text" id="form3Example1cg" className="form-control form-control-lg" />
  </div>

  <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form3Example3cg">이메일</label>
    <input type="email" id="form3Example3cg" className="form-control form-control-lg" />
  </div>

  <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form3Example4cg">비밀번호</label>
    <input type="password" id="form3Example4cg" className="form-control form-control-lg" />
  </div>

  <div className="form-outline mb-4">
  <label className="form-label" htmlFor="form3Example4cdg">비밀번호 재확인</label>
    <input type="password" id="form3Example4cdg" className="form-control form-control-lg" />
  </div>

  <div className="form-check d-flex justify-content-center mb-5">
    <input className="form-check-input me-2"    type="checkbox" value="" id="form2Example3cg" />
    <label className="form-check-label" htmlFor="form2Example3g">
    모든 서비스 이용약관에 동의합니다. <a href="#!" className="text-body"></a>
    </label>
  </div>

  <div className="d-flex justify-content-center">
  <button type="button" className="btn btn-dark btn-block mb-4" style={{width: 600+"px"}}>가입하기</button>  
  </div>

  <p className="text-center text-muted mt-5 mb-0">이미 회원이신가요? <a href="/user/login"
      className="fw-bold text-body"><u>로그인</u></a></p>

</form>
<a href="#" className={style.float}>
            <img src='https://ifh.cc/g/5y48Hl.png' className={style.my} style={{width:40+"px", height:40+"px"}}/>
        </a>
    </>)
   
}