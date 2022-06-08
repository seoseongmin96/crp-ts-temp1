import style from "@/styles/Layout.module.css";


interface Props {
  children?:any
    // any props that come into the component
}

export function Layout({ children }:any){
  return (<div className={style.container}>
        <main className={style.main}>{children}</main>
      </div>
  );
}