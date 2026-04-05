function Profile({ data }) {
  if (!data) return <p>Loading...</p>;

  return (
    <div className="profile">
      <img src={data.profile_picture} />
      <h2>{data.name}</h2>
      <p><strong>DOB:</strong> {data.date_of_birth}</p>
      <p><strong>Gender:</strong> {data.gender}</p>
      <p><strong>Phone:</strong> {data.phone_number}</p>
      <p><strong>Insurance:</strong> {data.insurance_provider}</p>
      <button>Show All Information</button>
    </div>
  );
}

export default Profile;