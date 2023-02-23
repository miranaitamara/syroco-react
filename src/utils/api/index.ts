const api = {
    getComputationOptionsData() {
        return fetch('/api/computation-options').then((res) => {
            return res.json();
        });
    },
};
export default api;
