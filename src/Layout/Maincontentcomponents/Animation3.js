
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react"


export default function Animation3(props)
{

    const boxVariant = {
        visible: { opacity: 1,  transition: { duration: 0.7 } },
        hidden: { opacity: 0.1 }
      };
      const control = useAnimation();
      const [ref, inView] = useInView();
     useEffect(() => {
        if (inView) {
          control.start("visible");
        } else {
          control.start("hidden");
        }
      }, [control, inView]);
    

    return(
        <motion.div
        className="box"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        {props.children}
        </motion.div>
        )

}