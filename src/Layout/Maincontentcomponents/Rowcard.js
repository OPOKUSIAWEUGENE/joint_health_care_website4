import styles from "../layout.module.css"

export default function Rowcard(props){
    const height=props.height?props.height:null;
   const  width=props.width?props.width:null;
    return(
        <div className={styles.rowcard} style={{height:height, width:width}}>
            {props.children}
        </div>
    )
}