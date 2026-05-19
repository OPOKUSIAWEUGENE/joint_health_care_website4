
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react"


export default function HeaderAnimation(props)
{

    const boxVariant = {
        visible: { opacity: 1, x: 0, transition: { duration: 0.45 } },
        hidden: { opacity: 0, x: -50 }
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
