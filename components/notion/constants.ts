import { BsBook } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { LiaProjectDiagramSolid } from "react-icons/lia";


export const sidebarTeamLinks = [
    {   id: 1,
        title: "Teamspaces",
        links: [
            {   id: 1,
                icon: HiHome,
                label: "Roti HQ",
                subLinks: [
                    {   id: 1,
                        subLinks: [],
                        icon: LiaProjectDiagramSolid,
                        label: "Projects"
                    },
                    {   id: 2,
                        subLinks: [],
                        icon: BsBook,
                        label: "Wiki"
                    },
                    {   id: 3,
                        subLinks: [
                            {
                                label: "Meetings",
                                href: "#"
                            },
                            {
                                label: "Calender",
                                href: "#"
                            },
                            {
                                label: "List by type",
                                href: "#"
                            },
                            {
                                label: "Mine",
                                href: "#"
                            },
                            {
                                label: "All",
                                href: "#"
                            },
                        ],
                        icon: null,
                        label: "Meetings"
                    },
                    {   id: 4,
                        subLinks: [
                            {
                                label: "Recently edited",
                                href: "#"
                            },
                            {
                                label: "Table by category",
                                href: "#"
                            },
                            {
                                label: "Mine",
                                href: "#"
                            },
                            {
                                label: "All",
                                href: "#"
                            },
                        ],
                        icon: null,
                        label: "Docs"
                    },
                ]
            },
            // {   id: 2,
            //     icon: BsPeopleFill,
            //     label: "Product Management",
            //     subLinks: [
            //         {   id: 1,
            //             subLinks: [],
            //             icon: LiaProjectDiagramSolid,
            //             label: "Projects"
            //         },
            //         {   id: 2,
            //             subLinks: [],
            //             icon: BsBook,
            //             label: "Wiki"
            //         },
            //         {   id: 3,
            //             subLinks: [
            //                 {
            //                     label: "Meetings",
            //                     href: "#"
            //                 },
            //                 {
            //                     label: "Calender",
            //                     href: "#"
            //                 },
            //                 {
            //                     label: "List by type",
            //                     href: "#"
            //                 },
            //                 {
            //                     label: "Mine",
            //                     href: "#"
            //                 },
            //                 {
            //                     label: "All",
            //                     href: "#"
            //                 },
            //             ],
            //             icon: null,
            //             label: "Meetings"
            //         },
            //         {   id: 4,
            //             subLinks: [
            //                 {
            //                     label: "Recently edited",
            //                     href: "#"
            //                 },
            //                 {
            //                     label: "Table by category",
            //                     href: "#"
            //                 },
            //                 {
            //                     label: "Mine",
            //                     href: "#"
            //                 },
            //                 {
            //                     label: "All",
            //                     href: "#"
            //                 },
            //             ],
            //             icon: null,
            //             label: "Docs"
            //         },
            //     ]
            // },
        ]
    },
]