export const container = {
    hide: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
export const item = {
    hide: { opacity: 0 },
    show: { opacity: 1,
        transition: {
        type: "tween",
        ease: "easeIn",
        duration: .4
        }
}
}