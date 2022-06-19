class DateRepository {
    /**
     * @returns {string}
     */
    get() {
        const date = new Date();
        const dd = date.getDate();
        const mm = date.getMonth();
        const yy = date.getFullYear();

        return `${mm.toString().padStart(2, '0')}_${dd.toString().padStart(2, '0')}_${yy}`;
    }
}

export default new DateRepository();

