module.exports = {
  remainingDays(job) {
    const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed();
    const createdDate = new Date(job.createdAt);
    const dueDay = createdDate.getDate() + Number(remainingDays);
    //date in milliseconds
    const dueDateInMs = createdDate.setDate(dueDay);
    const timeDiffInMS = dueDateInMs - Date.now();
    const dayInMs = 1000 * 60 * 60 * 24;
    const dayDiff = Math.ceil(timeDiffInMS / dayInMs);

    return dayDiff;
  },
  calculateBudget: (job, valueHour) => valueHour * job["total-hours"],
};
