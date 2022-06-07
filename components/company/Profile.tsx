import React from 'react';
import styles from "@/styles/Profile.module.css";
import style from '@/styles/Float.module.css'
export function Profile(){
     return(
       <>
          <h2>개발자 프로필</h2>
          <br/><br/>
          <div style={{display: "flex", float:"left"}}>
            <div className={styles.table}>
            <img
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCSSYf%2FbtrCJTjXYjB%2FNdtUWtdtpI3dl63OOl7Ugk%2Fimg.png"
              width="250"
              height="250"/><br/> <br/>
              <h5 className={styles.text}> 조 현 국 </h5>  <br/>
              <h4 className={styles.text}> Python , Linux </h4> 
              <h6 className={styles.text}> Tensorflow, Ubuntu </h6> <br/>
              <p className={styles.text}> Chatbot Software Developer </p>
              <img style={{width:60}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABDCAMAAACRDGoDAAAAaVBMVEX///8AAAAXFRYiIiIfHx/5+fkODg6SkpI/Pz8bGxvZ2dnn5+cXFxcFBQVOTk7x8fEuLi7g4ODBwcGZmZnHx8fT09MnJydubm6KiopVVVVcXFytra2CgoJISEhzc3OlpaVkZGQ1NTW2trY/s60QAAADKklEQVRYhe2WW9eiIBSG3XIQRMRTfqUdtP//I2eDWlrUWrNm6mKG96JsYzzsExBFQUFBQUFBQf+70uvl0lfqu9BqgFn8uPsetQWIFwHk6Veo5gA8XkvD/gvYkkL8KDiwj2MfnJ3Bpw9jGeExl7CCa/cMw2e5A8S8jUzfulq2H4cGY4DgfvuiUeYvxr5Bgu7wgfU7wxhTVWXNNuOwwphjkfGszRt8Lu9mtU9q+13uk8tm1iSp3nMFxhR+nszUmu9F3QCnVEoJOLuA4ragFO32RwV6XP99D3B8i91Zx7h4NBtnlsv8DCjRUogWSkwBgSZSp0PuuNQtogG6mSPh8Xvu0QX06R0mXGktsUo4ARdHG+ITjAzpEv6EW9j5+bN9t1mPoHw1Tcps8xE+cyM/dx+p1LzCGu11FzXigng+v4Xu3nZOFreg6lwSSqC03FKVqrfci6RnXAJvD8ilpwJeJzl1bl09Iz9wD4RNKYtMYmUw16AKIIRwSFMglGutY4LcWsc/tsSy3CYmA5Bzdp41hdNX8mc3sqyO4JMCzhHFNEF/zzGR+6PCEZKhpOPyzHGl5cq82nUZHT1T37i9Z2TQd+7krwKs6pmLP+b8EnJGdfKRy2v7P5r5UzzF2Xf4jKuCQwg2EEvTli5cX11tuQnWhaTcf42Y+tQTDOUG5rOBjZS7bcnLvfXRb3CnPoLnC8Z+00fHmMbNI1f7uc0mzvTFlu72DU4es+Dyfi84hROA6E6b/Or6ahZu5fpI07a/HqTjUtFXXSZzP9YC7BlEth7300WA3xZbQWy3ZyqRa/sIt5IM+2iXgmwnrhTOPTzSuO0jjW0EGfW2qJPQ1PRUwwmPo8m3Jmkn7Lre1LnloGV+jVgxxshVgmtIy6wQLs6yOOByiQY51KSLajJcWq1l/QrrThJV4SoBzGxYrgCwjb4qy43BlM89UparfKry3Xnd4fXR1Bpu3o0L9sVe85dk0NWdudb9sgN3esJ2H8XaXtDZ+r48ce1h93EwhvrcLaXnuCA+jsVQnwDzu6QTuRzOn6da9ejyUvM5gGi+g0Vd82XrqIfvUYOCgoKCgoKC/gn9AgBNKXyxh8NPAAAAAElFTkSuQmCC" alt="logo"/>
              <a href="https://github.com/ChoHyunGook" target="_blank" rel="noreferrer">Git Hub</a>: Address
            </div>
            <div className={styles.table}>
              <img
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbWAxt3%2FbtrCKi4Tavh%2Foy1jUTkKLtzkb46Kgmc790%2Fimg.png"
              width="250"
              height="250"/><br/> <br/>
              <h5 className={styles.text}> 최 은 아 </h5>  <br/>
              <h4 className={styles.text}> Python ,  Java</h4>
              <h6 className={styles.text}> Tensorflow, Spring </h6> <br/>
              <p className={styles.text}> Plagiarism & Analysis Software Developer </p>
              <img style={{width:60}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABDCAMAAACRDGoDAAAAaVBMVEX///8AAAAXFRYiIiIfHx/5+fkODg6SkpI/Pz8bGxvZ2dnn5+cXFxcFBQVOTk7x8fEuLi7g4ODBwcGZmZnHx8fT09MnJydubm6KiopVVVVcXFytra2CgoJISEhzc3OlpaVkZGQ1NTW2trY/s60QAAADKklEQVRYhe2WW9eiIBSG3XIQRMRTfqUdtP//I2eDWlrUWrNm6mKG96JsYzzsExBFQUFBQUFBQf+70uvl0lfqu9BqgFn8uPsetQWIFwHk6Veo5gA8XkvD/gvYkkL8KDiwj2MfnJ3Bpw9jGeExl7CCa/cMw2e5A8S8jUzfulq2H4cGY4DgfvuiUeYvxr5Bgu7wgfU7wxhTVWXNNuOwwphjkfGszRt8Lu9mtU9q+13uk8tm1iSp3nMFxhR+nszUmu9F3QCnVEoJOLuA4ragFO32RwV6XP99D3B8i91Zx7h4NBtnlsv8DCjRUogWSkwBgSZSp0PuuNQtogG6mSPh8Xvu0QX06R0mXGktsUo4ARdHG+ITjAzpEv6EW9j5+bN9t1mPoHw1Tcps8xE+cyM/dx+p1LzCGu11FzXigng+v4Xu3nZOFreg6lwSSqC03FKVqrfci6RnXAJvD8ilpwJeJzl1bl09Iz9wD4RNKYtMYmUw16AKIIRwSFMglGutY4LcWsc/tsSy3CYmA5Bzdp41hdNX8mc3sqyO4JMCzhHFNEF/zzGR+6PCEZKhpOPyzHGl5cq82nUZHT1T37i9Z2TQd+7krwKs6pmLP+b8EnJGdfKRy2v7P5r5UzzF2Xf4jKuCQwg2EEvTli5cX11tuQnWhaTcf42Y+tQTDOUG5rOBjZS7bcnLvfXRb3CnPoLnC8Z+00fHmMbNI1f7uc0mzvTFlu72DU4es+Dyfi84hROA6E6b/Or6ahZu5fpI07a/HqTjUtFXXSZzP9YC7BlEth7300WA3xZbQWy3ZyqRa/sIt5IM+2iXgmwnrhTOPTzSuO0jjW0EGfW2qJPQ1PRUwwmPo8m3Jmkn7Lre1LnloGV+jVgxxshVgmtIy6wQLs6yOOByiQY51KSLajJcWq1l/QrrThJV4SoBzGxYrgCwjb4qy43BlM89UparfKry3Xnd4fXR1Bpu3o0L9sVe85dk0NWdudb9sgN3esJ2H8XaXtDZ+r48ce1h93EwhvrcLaXnuCA+jsVQnwDzu6QTuRzOn6da9ejyUvM5gGi+g0Vd82XrqIfvUYOCgoKCgoKC/gn9AgBNKXyxh8NPAAAAAElFTkSuQmCC" alt="logo"/>
              <a href="https://github.com/silver-or" target="_blank" rel="noreferrer">Git Hub</a>: Address
              </div>
              <div className={styles.table}>
            <img
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYB4V7%2FbtrCLAqrXAx%2FuTOlk91YM5GXH0tIvJz4x0%2Fimg.png"
              width="250"
              height="250"/> <br/> <br/>
              <h5 className={styles.text}> 권 혜 민 </h5>  <br/>
              <h4 className={styles.text}> Python, Java </h4>
              <h6 className={styles.text}> Tensorflow, Spring </h6> <br/>
              <p className={styles.text}> SoundSearch Software Developer </p>
              <img style={{width:60}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABDCAMAAACRDGoDAAAAaVBMVEX///8AAAAXFRYiIiIfHx/5+fkODg6SkpI/Pz8bGxvZ2dnn5+cXFxcFBQVOTk7x8fEuLi7g4ODBwcGZmZnHx8fT09MnJydubm6KiopVVVVcXFytra2CgoJISEhzc3OlpaVkZGQ1NTW2trY/s60QAAADKklEQVRYhe2WW9eiIBSG3XIQRMRTfqUdtP//I2eDWlrUWrNm6mKG96JsYzzsExBFQUFBQUFBQf+70uvl0lfqu9BqgFn8uPsetQWIFwHk6Veo5gA8XkvD/gvYkkL8KDiwj2MfnJ3Bpw9jGeExl7CCa/cMw2e5A8S8jUzfulq2H4cGY4DgfvuiUeYvxr5Bgu7wgfU7wxhTVWXNNuOwwphjkfGszRt8Lu9mtU9q+13uk8tm1iSp3nMFxhR+nszUmu9F3QCnVEoJOLuA4ragFO32RwV6XP99D3B8i91Zx7h4NBtnlsv8DCjRUogWSkwBgSZSp0PuuNQtogG6mSPh8Xvu0QX06R0mXGktsUo4ARdHG+ITjAzpEv6EW9j5+bN9t1mPoHw1Tcps8xE+cyM/dx+p1LzCGu11FzXigng+v4Xu3nZOFreg6lwSSqC03FKVqrfci6RnXAJvD8ilpwJeJzl1bl09Iz9wD4RNKYtMYmUw16AKIIRwSFMglGutY4LcWsc/tsSy3CYmA5Bzdp41hdNX8mc3sqyO4JMCzhHFNEF/zzGR+6PCEZKhpOPyzHGl5cq82nUZHT1T37i9Z2TQd+7krwKs6pmLP+b8EnJGdfKRy2v7P5r5UzzF2Xf4jKuCQwg2EEvTli5cX11tuQnWhaTcf42Y+tQTDOUG5rOBjZS7bcnLvfXRb3CnPoLnC8Z+00fHmMbNI1f7uc0mzvTFlu72DU4es+Dyfi84hROA6E6b/Or6ahZu5fpI07a/HqTjUtFXXSZzP9YC7BlEth7300WA3xZbQWy3ZyqRa/sIt5IM+2iXgmwnrhTOPTzSuO0jjW0EGfW2qJPQ1PRUwwmPo8m3Jmkn7Lre1LnloGV+jVgxxshVgmtIy6wQLs6yOOByiQY51KSLajJcWq1l/QrrThJV4SoBzGxYrgCwjb4qy43BlM89UparfKry3Xnd4fXR1Bpu3o0L9sVe85dk0NWdudb9sgN3esJ2H8XaXtDZ+r48ce1h93EwhvrcLaXnuCA+jsVQnwDzu6QTuRzOn6da9ejyUvM5gGi+g0Vd82XrqIfvUYOCgoKCgoKC/gn9AgBNKXyxh8NPAAAAAElFTkSuQmCC" alt="logo"/>
              <a href="https://github.com/kwon-hyemin" target="_blank" rel="noreferrer">Git Hub</a>: Address
              </div>
              <div className={styles.table}>
            <img
              src="https://ifh.cc/g/dl1Zlh.jpg"
              width="250"
              height="250"/><br/> <br/>
              <h5 className={styles.text}> 서 성 민 </h5>  <br/>
              <h4 className={styles.text}> Type, JavaScript </h4>
              <h6 className={styles.text}> React, Next </h6> <br/>
              <p className={styles.text}> Composition Software Developer </p>
              <img style={{width:60}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABDCAMAAACRDGoDAAAAaVBMVEX///8AAAAXFRYiIiIfHx/5+fkODg6SkpI/Pz8bGxvZ2dnn5+cXFxcFBQVOTk7x8fEuLi7g4ODBwcGZmZnHx8fT09MnJydubm6KiopVVVVcXFytra2CgoJISEhzc3OlpaVkZGQ1NTW2trY/s60QAAADKklEQVRYhe2WW9eiIBSG3XIQRMRTfqUdtP//I2eDWlrUWrNm6mKG96JsYzzsExBFQUFBQUFBQf+70uvl0lfqu9BqgFn8uPsetQWIFwHk6Veo5gA8XkvD/gvYkkL8KDiwj2MfnJ3Bpw9jGeExl7CCa/cMw2e5A8S8jUzfulq2H4cGY4DgfvuiUeYvxr5Bgu7wgfU7wxhTVWXNNuOwwphjkfGszRt8Lu9mtU9q+13uk8tm1iSp3nMFxhR+nszUmu9F3QCnVEoJOLuA4ragFO32RwV6XP99D3B8i91Zx7h4NBtnlsv8DCjRUogWSkwBgSZSp0PuuNQtogG6mSPh8Xvu0QX06R0mXGktsUo4ARdHG+ITjAzpEv6EW9j5+bN9t1mPoHw1Tcps8xE+cyM/dx+p1LzCGu11FzXigng+v4Xu3nZOFreg6lwSSqC03FKVqrfci6RnXAJvD8ilpwJeJzl1bl09Iz9wD4RNKYtMYmUw16AKIIRwSFMglGutY4LcWsc/tsSy3CYmA5Bzdp41hdNX8mc3sqyO4JMCzhHFNEF/zzGR+6PCEZKhpOPyzHGl5cq82nUZHT1T37i9Z2TQd+7krwKs6pmLP+b8EnJGdfKRy2v7P5r5UzzF2Xf4jKuCQwg2EEvTli5cX11tuQnWhaTcf42Y+tQTDOUG5rOBjZS7bcnLvfXRb3CnPoLnC8Z+00fHmMbNI1f7uc0mzvTFlu72DU4es+Dyfi84hROA6E6b/Or6ahZu5fpI07a/HqTjUtFXXSZzP9YC7BlEth7300WA3xZbQWy3ZyqRa/sIt5IM+2iXgmwnrhTOPTzSuO0jjW0EGfW2qJPQ1PRUwwmPo8m3Jmkn7Lre1LnloGV+jVgxxshVgmtIy6wQLs6yOOByiQY51KSLajJcWq1l/QrrThJV4SoBzGxYrgCwjb4qy43BlM89UparfKry3Xnd4fXR1Bpu3o0L9sVe85dk0NWdudb9sgN3esJ2H8XaXtDZ+r48ce1h93EwhvrcLaXnuCA+jsVQnwDzu6QTuRzOn6da9ejyUvM5gGi+g0Vd82XrqIfvUYOCgoKCgoKC/gn9AgBNKXyxh8NPAAAAAElFTkSuQmCC" alt="logo"/>
              <a href="https://github.com/seoseongmin96" target="_blank" rel="noreferrer">Git Hub</a>: Address
              </div>
          </div>
          <a href="#" className={style.float}>
    <img src='https://ifh.cc/g/5y48Hl.png' className={style.my} style={{width:40+"px", height:40+"px"}}/>
</a>
        </>)
}