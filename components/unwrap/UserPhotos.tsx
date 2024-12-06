import { motion } from "framer-motion"

const userImagesLeft = [
    {
        id: 1,
        path: "/unwrap/user1.png",
        position: "bottom-[50%] right-0",
    },
    {
        id: 2,
        path: "/unwrap/user2.png",
        position: "top-[45%] right-0",
    },
    {
        id: 3,
        path: "/unwrap/user3.png",
        position: "bottom-0 right-0",
    },
    {
        id: 4,
        path: "/unwrap/user4.png",
        position: "top-[10%] right-[30%]",
    },
    {
        id: 5,
        path: "/unwrap/user5.png",
        position: "top-1/2 -translate-y-1/2 right-[20%]",
    },
    {
        id: 6,
        path: "/unwrap/user6.png",
        position: "bottom-[20%] right-[30%]",
    },
    {
        id: 7,
        path: "/unwrap/user7.png",
        position: "top-[15%] right-[40%]",
    },
    {
        id: 8,
        path: "/unwrap/user8.png",
        position: "top-[40%] right-[50%]",
    },
    {
        id: 9,
        path: "/unwrap/user9.png",
        position: "bottom-[10%] right-[45%]",
    },
    {
        id: 10,
        path: "/unwrap/user10.png",
        position: "top-[20%] right-[60%]",
    },
    {
        id: 11,
        path: "/unwrap/user11.png",
        position: "bottom-[30%] right-[68%]",
    },
    {
        id: 12,
        path: "/unwrap/user12.png",
        position: "top-1/2 -translate-y-1/2 right-[82%]",
    },
]
const userImagesRight = [
    {
        id: 1,
        path: "/unwrap/user1.png",
        position: "bottom-[50%] left-0",
    },
    {
        id: 2,
        path: "/unwrap/user2.png",
        position: "top-[45%] left-0",
    },
    {
        id: 3,
        path: "/unwrap/user3.png",
        position: "bottom-0 left-0",
    },
    {
        id: 4,
        path: "/unwrap/user4.png",
        position: "top-[10%] left-[30%]",
    },
    {
        id: 5,
        path: "/unwrap/user5.png",
        position: "top-1/2 -translate-y-1/2 left-[20%]",
    },
    {
        id: 6,
        path: "/unwrap/user6.png",
        position: "bottom-[20%] left-[30%]",
    },
    {
        id: 7,
        path: "/unwrap/user7.png",
        position: "top-[15%] left-[40%]",
    },
    {
        id: 8,
        path: "/unwrap/user8.png",
        position: "top-[40%] left-[50%]",
    },
    {
        id: 9,
        path: "/unwrap/user9.png",
        position: "bottom-[10%] left-[45%]",
    },
    {
        id: 10,
        path: "/unwrap/user10.png",
        position: "top-[20%] left-[60%]",
    },
    {
        id: 11,
        path: "/unwrap/user11.png",
        position: "bottom-[30%] left-[68%]",
    },
    {
        id: 12,
        path: "/unwrap/user12.png",
        position: "top-1/2 -translate-y-1/2 left-[82%]",
    },
]

const UserPhotos = ({position}: {position: "left" | "right"}) => {
  return (
    <div className="relative p-5 w-full h-full hidden lg:block">
        {
            position === "left" ?  userImagesLeft.map((image, i) => (
                    <motion.img
                        initial={{ scale: "40%", opacity: .5}} 
                        animate={{scale: "60%", opacity: 1}}
                        transition={{ delay: .2*i, duration: 1, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                        key={image.id}
                        className={`absolute scale-[.6] xl:scale-[.8] 2xl:scale-90 ${image.position}`}
                        src={image.path}
                        alt="user image"
                    />
            )) : (
                userImagesRight.map((image, i) => (
                    <motion.img
                        initial={{ scale: "40%", opacity: .5}} 
                        animate={{scale: "60%", opacity: 1}}
                        transition={{ delay: .2*i, duration: 1, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                        key={image.id}
                        className={`absolute scale-[.6] xl:scale-[.8] 2xl:scale-90 ${image.position}`}
                        src={image.path}
                        alt="user image"
                    />
            ))   
            )
        }
    </div>
  )
}

export default UserPhotos