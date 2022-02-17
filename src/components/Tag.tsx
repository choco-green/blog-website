export interface ITag {
    colour: string;
    text: string;
}


function Tag(props: { tags: ITag[] }) {

    const { tags } = props;

    return (
        <div className="flex">
            {
                tags.map((tag, index) => {
                    return (
                        <div className={ `text-sm rounded-md px-2 py-1 mr-2 grow-0 text-white ${ tag.colour }` }
                             key={ index }
                        >
                            { tag.text }
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Tag;