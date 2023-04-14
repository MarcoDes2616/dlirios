const getConfig = () => ({
    headers: { token: localStorage.getItem("token") }
});

export default getConfig;