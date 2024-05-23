

export default function ProjectContent({ project }) {

    return (
        <>
            <div>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <p>{project.dueDate}</p>
            </div>
        </>
    )

}