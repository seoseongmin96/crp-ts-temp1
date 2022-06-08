import style from '@/styles/Float.module.css'
export function Login() {
    return(<>
        <h2 className="text-uppercase text-center mb-5">로그인</h2>
    <div style={{width:600+"px"}}>
    <form>

    <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form2Example1">이메일</label>
        <input type="email" id="form2Example1" className="form-control" />
    </div>


    <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form2Example2">비밀번호</label>
        <input type="password" id="form2Example2" className="form-control" />
    </div>


    <div className="row mb-4">
        <div className="col d-flex justify-content-center">
        <div className  ="form-check">
            <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
            <label className="form-check-label" htmlFor="form2Example31"> 내 정보 기억하기 </label>
        </div>
        </div>

        <div className="col">

        <a href="#!">비밀번호를 잊었나요?</a>
        </div>
    </div>


    <button type="button" className="btn btn-dark btn-block mb-4" style={{width: 600+"px"}}>로그인 </button>

    
    <div className="text-center">
        <p>계정이 없으신가요? <a href="/user/register">가입하기</a></p> <br/>
       
        <button type="button" className="btn btn-link btn-floating mx-1">
        <i className="fa fa-facebook"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
        <i className="fa fa-google"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
        <i className="fa fa-twitter"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
        <i className="fa fa-github"></i>
        </button>
    </div>
</form> 
    </div>
    <a href="#" className={style.float}>
    <img src='https://ifh.cc/g/5y48Hl.png' className={style.my} style={{width:40+"px", height:40+"px"}}/>
</a>
    </>)
}