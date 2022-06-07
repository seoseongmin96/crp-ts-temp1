import style from '@/styles/Float.module.css'
export function Select() {
    return(<>
        <div style={{display:"flex", float:"left"}}>
            <div className="card" style={{width: 18+"rem"}}>
            <img src="https://img.freepik.com/free-vector/illegal-pirate-paper-document-pirated-content-flat-vector-illustration_124715-1535.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">표절 검사를 확인해보세요</h5> <br/> 
                    <p className="card-text"></p>
                    <a href="/plagiarism/result" className="btn btn-outline-dark">표절 검사</a>
                </div>
            </div> &nbsp; &nbsp;
            <div className="card" style={{width: 18+"rem"}}>
                <img src="https://img.freepik.com/free-vector/data-analysis-illustration-flat-style-design_159144-40.jpg?w=2000" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">분석된 악보를 확인하세요</h5> <br/> 
                        <p className="card-text"></p>
                        <a href="/analysis/analysis" className="btn btn-outline-dark">악보 분석</a>
                    </div>
            </div>
        </div>
        <a href="#" className={style.float}>
            <img src='https://ifh.cc/g/5y48Hl.png' className={style.my} style={{width:40+"px", height:40+"px"}}/>
        </a>

    </>)
}