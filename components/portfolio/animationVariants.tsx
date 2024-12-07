const transition = { ease: [0.75, 0, 0.24, 1] }

export const textVariant = {
    enter: (i: number) => ({
        opacity: 1,
        y: "0%",
        transition: {...transition, delay: i}
    }),
    exit:() =>  ({
        opacity: 0,
        y: "100%",
    }),

}

// export const opacityVariants = {
//     hidden: {
//         opacity: 0,
//     },
//     show: (delay: number) => ({
//         opacity: 1,
//         transition: {
//             duration: .7, delay
//         }
//     })
// }