import Feed from "../components/Feed";

function Content() {
    return (
        <div className="flex">
            <div className="md:grow md:pl-20"/>
            <Feed/>
            <div className="md:grow"/>
        </div>
    );
}

export default Content;