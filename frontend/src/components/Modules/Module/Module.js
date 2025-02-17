function Module({ module }) {
    const { name, description } = module;
    return (
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Module;
