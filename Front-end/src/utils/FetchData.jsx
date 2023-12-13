class FetchData {
  constructor(urlAPI, UID, mocked) {
    this.urlAPI = urlAPI;
    this.userId = UID;
    this.mocked = mocked;
    this.user = null;
    this.activity = null;
    this.sessions = null;
    this.perf = null;
  }
  async userData() {
    if (this.mocked) {
      try {
        const response = await fetch(this.urlAPI + this.userId);
        const userData = await response.json();
        return userData.data;
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await fetch("../../public/__MOCK__/user.json");
        const userData = await response.json();
        console.log(userData);
      } catch (error) {
        console.log(error);
      }
    }
  }

  async activityData() {
    if (this.mocked) {
      try {
        const response = await fetch(this.urlAPI + this.userId + "/activity");
        const activityData = await response.json();
        return activityData.data;
      } catch (error) {
        console.log(error);
      }
    }
  }

  async averageSession() {
    if (this.mocked) {
      try {
        const response = await fetch(
          this.urlAPI + this.userId + "/average-sessions"
        );
        const averageSession = await response.json();
        return averageSession.data;
      } catch (error) {
        console.log(error);
      }
    }
  }

  async performance() {
    if (this.mocked) {
      try {
        const response = await fetch(
          this.urlAPI + this.userId + "/performance"
        );
        const performance = await response.json();
        return performance.data;
      } catch (error) {
        console.log(error);
      }
    }
  }
}

export default FetchData;
