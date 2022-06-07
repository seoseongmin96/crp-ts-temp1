import React, { useState } from "react";
//import { FileUploader } from "react-drag-drop-files";
import style from '@/styles/Float.module.css'

const fileTypes = ["JPG", "PNG", "GIF"];

export function Faq() {
  return (<>
    <section>
      <h3 className="text-center mb-4 pb-2 text-primary fw-bold">자주 찾는 질문</h3>
      <p className="text-center mb-5">
      아래에서 가장 자주 묻는 질문에 대한 답을 찾아보세요.
      </p>
    
      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4">
          <h6 className="mb-3 text-primary"><i className="fa fa-paper-plane text-primary pe-2"></i> 표절프로그램은 어떻게 이용하나요?</h6>
          <p>
             악보 표절 검사 프로그램창에서 악보를 드래그하여 업로드를 하게 되면 표절검사와 악보분석 기능을 선택할 수 있습니다.
             여기서 표절검사 버튼을 누르게 되면 해당 악보와 표절률이 나타나게 됩니다. 
          </p>
        </div>
    
        <div className="col-md-6 col-lg-4 mb-4">
          <h6 className="mb-3 text-primary"><i className="fa fa-pen-alt text-primary pe-2"></i> 답변에 도음이 되셨나요?</h6>
          <p>
            네. 감사합니다.
          </p>
        </div>
    
        <div className="col-md-6 col-lg-4 mb-4">
          <h6 className="mb-3 text-primary"><i className="fa fa-user text-primary pe-2"></i> 악보 분석 프로그램은 어떻게 이용하나요?</h6>
          <p>
          악보 표절 검사 프로그램창에서 악보를 드래그하여 업로드를 하게 되면 표절검사와 악보분석 기능을 선택할 수 있습니다.
          여기서 악보분석 버튼을 누르게 되면 해당 악보가 나오고 그 악보를 음성으로 분석해줍니다. 
          </p>
        </div>
    
        <div className="col-md-6 col-lg-4 mb-4">
          <h6 className="mb-3 text-primary"><i className="fa fa-rocket text-primary pe-2"></i> 작곡 프로그램은 어떻게 이용하나요?</h6>
          <p>
            작곡 프로그램 창을 들어가게 되면 작곡 프로그램을 이용할 수 있습니다.
          </p>
        </div>
    
        <div className="col-md-6 col-lg-4 mb-4">
          <h6 className="mb-3 text-primary"><i className="fa fa-home text-primary pe-2"></i> 작곡 프로그램은 어떻게 이용하나요?</h6>
          <p> 작곡 프로그램 창을 들어가게 되면 바로 작곡을 할 수 있습니다.</p>
        </div>
    
        <div className="col-md-6 col-lg-4 mb-4">
          <h6 className="mb-3 text-primary"><i className="fa fa-book-open text-primary pe-2"></i> 음성인식이 제대로 작동하지 않을 때가 있는데 어떻게 해야되나요?</h6>
          <p>
            고객님 죄송합니다. 빠른 기간 내에 정상적으로 작동할 수 있도록 개선하겠습니다. 감사합니다.
          </p>
        </div>
      </div>
      <a href="/community/contactUs">추가적으로 다른 질문이 있으신가요? 문의 주시기 바랍니다.</a>
    </section>
    <a href="#" className={style.float}>
            <img src='https://ifh.cc/g/5y48Hl.png' className={style.my} style={{width:40+"px", height:40+"px"}}/>
        </a>
    </>
);
}