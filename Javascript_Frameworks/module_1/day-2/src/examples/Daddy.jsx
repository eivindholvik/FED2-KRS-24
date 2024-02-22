export default function Daddy() {
    const names = ["Eline", "Stine"];
    return (
        <div>
            {names.map((name, i) => {
                return <Child key={i} name={name} />;
            })}
        </div>
    );
}

function Child({ name, leif }) {
    // const { name, leif } = props;
    console.log(name, leif);
    return <div>{name}</div>;
}
