import styles from "../layout.module.css"

export default function Parallaxcard(props){
    const height=props.height?props.height:null;
    const  width=props.width?props.width:null;
    const background=props.background?props.background:null
     return(
         <div className={styles.parallaxcard} style={{height:height, width:width, background:background}}>
             {props.children}
           
         </div>
     )
}