import { useGetContactsByUserIdQuery } from "./../services/userApi.js";

const Contacts = () => {
  const userId = 1; // TODO: should be from Redux (after login!)
  const { data, isError, isLoading } = useGetContactsByUserIdQuery(userId);

  return (
    <div>
      <h3>Contacts</h3>
      {isError ? (
        <>Error...</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <ul>
          {data.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Contacts;
