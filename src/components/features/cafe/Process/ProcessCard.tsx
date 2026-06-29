type Props = {
    number:string;
    title:string;
    description:string;
};

export default function ProcessCard({
    number,
    title,
    description,
}:Props){
    return(

        <article className="rounded-3xl border border-stone-200 p-10">

            <span className="text-stone-400">
                {number}
            </span>

            <h3 className="mt-6 text-3xl font-light">
                {title}
            </h3>

            <p className="mt-6 leading-8 text-stone-600">
                {description}
            </p>

        </article>

    );
}