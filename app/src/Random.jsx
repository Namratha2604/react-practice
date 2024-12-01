export function Random(){

        let num = Math.random() * 100;

    return (
        <>
        <p>This is the no of people i like {Math.round(num)}</p>
        </>
    )
}