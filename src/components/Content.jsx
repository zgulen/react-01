import contentStyle from "../scss/_content.module.scss";


const Content = ({ data }) => {
  return (
    <div className={contentStyle["container"]}>
      {data.map((items) => {
        console.log(items.rating);
        const {
          id,
          title,
          price,
          description,
          image,
          rating: { rate, count },
        } = items;
        return (
          <div className={contentStyle["container__content"]}>
            <div key={id} className={contentStyle["cards"]}>
              <h3>{title}</h3>
              <img src={image} alt={title} />
              <p>{description}</p>
              <div
                className="rating"
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                }}
              >
                <p>Rating: {rate}</p>
                <p>Stock: {count}</p>
              </div>
              <h3>{price + " ₺"}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
