/* eslint-disable jsx-a11y/img-redundant-alt */
import { Component } from "react";
import Tag, { ITag } from "./tag";

export interface BlogCardProps {
    UserImage: string,
    Username: string
    image: string,
    title: string,
    time: string,
    description: string
}

class BlogCard extends Component<BlogCardProps, {}> {

    tags: ITag[] = [ { text: "#react", colour: "bg-blue-400" },
        { text: "lol", colour: "bg-red-400" } ];

    override render() {
        return (
            <div className="2xl:w-[calc(56vw-5rem)] xl:w-[calc(60vw-5rem)] lg:w-[calc(70vw-5rem)] md:w-[calc(85vw-5rem)] sm:w-full
                            mb-5 p-4 bg-indigo-50
                            border-gray-300 border-b-2 border-r-2 rounded-2xl"
            >
                <div className="flex items-center mb-2 justify-between">
                    <div className="flex items-center">
                        <img src={ this.props.UserImage }
                             className="sm:w-8 sm:h-8 w-6 h-6 rounded-full mr-2"
                             alt="User Profile Picture"
                        />
                        <div className="mr-2 sm:text-base xs:text-sm text-xs">{ this.props.Username }</div>
                    </div>
                    <div className="text-stone-600 sm:text-base xs:text-sm text-xs">{ this.props.time }</div>
                </div>
                <div className="flex flex-row items-center">
                    <div className="flex flex-col justify-center flex-grow mr-2">
                        <div className="sm:text-xl xs:text-lg xxs:text-sm text-xs font-bold mb-1 sm:line-clamp-2 line-clamp-4">
                            { this.props.title }
                        </div>
                        <div className="flex mb-1 flex-nowrap">
                            <Tag tags={ this.tags }/>
                            <div className="grow"/>
                        </div>
                        <div className="sm:block hidden">
                            <p className="2xl:line-clamp-4 line-clamp-3">{ this.props.description }</p>
                        </div>
                    </div>
                    <img src={ this.props.image }
                         className="md:h-32 md:w-32 sm:h-24 sm:w-24 h-16 w-16 aspect-square md:rounded-2xl rounded-xl "
                         alt="Description related photo"
                    />
                </div>
            </div>
        );
    }
}

export default BlogCard;

