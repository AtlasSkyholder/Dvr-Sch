// schedule data setup [1,8,0]
// 1 represents the day
// 8 represents the hour
// 0 represents the event in that hour

// Events - 0: nothing, 1: Pickup goods, 2: Deliver goods, 3: Other

let data = [
  {
    name: 'Tom',
    schedule: [
                [1,8,0],[1,9,0],[1,10,0],[1,11,0],[1,12,0],[1,13,0],[1,14,0],[1,15,0],[1,16,0],[1,17,0],
                [2,8,1],[2,9,0],[2,10,2],[2,11,3],[2,12,3],[2,13,1],[2,14,0],[2,15,0],[2,16,2],[2,17,0],
                [3,8,1],[3,9,0],[3,10,0],[3,11,0],[3,12,3],[3,13,0],[3,14,0],[3,15,2],[3,16,0],[3,17,0],
                [4,8,0],[4,9,0],[4,10,1],[4,11,0],[4,12,0],[4,13,0],[4,14,3],[4,15,0],[4,16,2],[4,17,0],
                [5,8,0],[5,9,1],[5,10,0],[5,11,0],[5,12,2],[5,13,0],[5,14,1],[5,15,3],[5,16,0],[5,17,2],
                [6,8,0],[6,9,1],[6,10,0],[6,11,2],[6,12,3],[6,13,0],[6,14,0],[6,15,0],[6,16,0],[6,17,0],
                [7,8,0],[7,9,0],[7,10,0],[7,11,0],[7,12,0],[7,13,0],[7,14,0],[7,15,0],[7,16,0],[7,17,0],
                [8,8,0],[8,9,0],[8,10,0],[8,11,0],[8,12,0],[8,13,0],[8,14,0],[8,15,0],[8,16,0],[8,17,0],
                [9,8,1],[9,9,0],[9,10,2],[9,11,3],[9,12,3],[9,13,1],[9,14,0],[9,15,0],[9,16,2],[9,17,0],
                [10,8,0],[10,9,0],[10,10,3],[10,11,3],[10,12,0],[10,13,0],[10,14,1],[10,15,0],[10,16,0],[10,17,2],
                [11,8,1],[11,9,0],[11,10,0],[11,11,0],[11,12,0],[11,13,0],[11,14,0],[11,15,0],[11,16,0],[11,17,2],
                [12,8,0],[12,9,0],[12,10,1],[12,11,3],[12,12,3],[12,13,0],[12,14,2],[12,15,0],[12,16,0],[12,17,0],
                [13,8,0],[13,9,0],[13,10,3],[13,11,1],[13,12,3],[13,13,0],[13,14,2],[13,15,0],[13,16,0],[13,17,3],
                [14,8,0],[14,9,0],[14,10,0],[14,11,0],[14,12,0],[14,13,0],[14,14,0],[14,15,0],[14,16,0],[14,17,0],
                [15,8,0],[15,9,0],[15,10,0],[15,11,0],[15,12,0],[15,13,0],[15,14,0],[15,15,0],[15,16,0],[15,17,2],
                [16,8,1],[16,9,2],[16,10,0],[16,11,3],[16,12,0],[16,13,1],[16,14,0],[16,15,0],[16,16,2],[16,17,0],
                [17,8,0],[17,9,1],[17,10,2],[17,11,0],[17,12,3],[17,13,3],[17,14,1],[17,15,2],[17,16,1],[17,17,2],
                [18,8,3],[18,9,0],[18,10,1],[18,11,0],[18,12,2],[18,13,0],[18,14,3],[18,15,1],[18,16,0],[18,17,2],
                [19,8,1],[19,9,0],[19,10,3],[19,11,2],[19,12,3],[19,13,1],[19,14,0],[19,15,0],[19,16,2],[19,17,3],
                [20,8,0],[20,9,1],[20,10,0],[20,11,2],[20,12,0],[20,13,3],[20,14,0],[20,15,3],[20,16,0],[20,17,2],
                [21,8,0],[21,9,0],[21,10,0],[21,11,0],[21,12,0],[21,13,0],[21,14,0],[21,15,0],[21,16,0],[21,17,0],
                [22,8,0],[22,9,0],[22,10,0],[22,11,0],[22,12,0],[22,13,0],[22,14,0],[22,15,0],[22,16,0],[22,17,0],
                [23,8,1],[23,9,3],[23,10,0],[23,11,2],[23,12,0],[23,13,1],[23,14,2],[23,15,0],[23,16,3],[23,17,0],
                [24,8,0],[24,9,3],[24,10,1],[24,11,2],[24,12,0],[24,13,0],[24,14,1],[24,15,3],[24,16,0],[24,17,2],
                [25,8,1],[25,9,2],[25,10,0],[25,11,1],[25,12,0],[25,13,0],[25,14,3],[25,15,2],[25,16,0],[25,17,3],
                [26,8,0],[26,9,1],[26,10,0],[26,11,2],[26,12,0],[26,13,0],[26,14,1],[26,15,0],[26,16,2],[26,17,0],
                [27,8,3],[27,9,0],[27,10,1],[27,11,0],[27,12,2],[27,13,3],[27,14,1],[27,15,0],[27,16,2],[27,17,0],
                [28,8,0],[28,9,0],[28,10,0],[28,11,0],[28,12,0],[28,13,0],[28,14,0],[28,15,0],[28,16,0],[28,17,0]
              ]
  },
  {
    name: 'Lindsay',
    schedule: [
      [1,8,0],[1,9,0],[1,10,0],[1,11,0],[1,12,0],[1,13,0],[1,14,0],[1,15,0],[1,16,0],[1,17,0],
      [2,8,1],[2,9,0],[2,10,2],[2,11,3],[2,12,3],[2,13,1],[2,14,0],[2,15,0],[2,16,2],[2,17,0],
      [3,8,1],[3,9,0],[3,10,0],[3,11,0],[3,12,3],[3,13,0],[3,14,0],[3,15,2],[3,16,0],[3,17,0],
      [4,8,0],[4,9,0],[4,10,1],[4,11,0],[4,12,0],[4,13,0],[4,14,3],[4,15,0],[4,16,2],[4,17,0],
      [5,8,0],[5,9,1],[5,10,0],[5,11,0],[5,12,2],[5,13,0],[5,14,1],[5,15,3],[5,16,0],[5,17,2],
      [6,8,0],[6,9,1],[6,10,0],[6,11,2],[6,12,3],[6,13,0],[6,14,0],[6,15,0],[6,16,0],[6,17,0],
      [7,8,0],[7,9,0],[7,10,0],[7,11,0],[7,12,0],[7,13,0],[7,14,0],[7,15,0],[7,16,0],[7,17,0],
      [8,8,0],[8,9,0],[8,10,0],[8,11,0],[8,12,0],[8,13,0],[8,14,0],[8,15,0],[8,16,0],[8,17,0],
      [9,8,1],[9,9,0],[9,10,2],[9,11,3],[9,12,3],[9,13,1],[9,14,0],[9,15,0],[9,16,2],[9,17,0],
      [10,8,0],[10,9,0],[10,10,3],[10,11,3],[10,12,0],[10,13,0],[10,14,1],[10,15,0],[10,16,0],[10,17,2],
      [11,8,1],[11,9,0],[11,10,0],[11,11,0],[11,12,0],[11,13,0],[11,14,0],[11,15,0],[11,16,0],[11,17,2],
      [12,8,0],[12,9,0],[12,10,1],[12,11,3],[12,12,3],[12,13,0],[12,14,2],[12,15,0],[12,16,0],[12,17,0],
      [13,8,0],[13,9,0],[13,10,3],[13,11,1],[13,12,3],[13,13,0],[13,14,2],[13,15,0],[13,16,0],[13,17,3],
      [14,8,0],[14,9,0],[14,10,0],[14,11,0],[14,12,0],[14,13,0],[14,14,0],[14,15,0],[14,16,0],[14,17,0],
      [15,8,0],[15,9,0],[15,10,0],[15,11,0],[15,12,0],[15,13,0],[15,14,0],[15,15,0],[15,16,0],[15,17,2],
      [16,8,1],[16,9,2],[16,10,0],[16,11,3],[16,12,0],[16,13,1],[16,14,0],[16,15,0],[16,16,2],[16,17,0],
      [17,8,0],[17,9,1],[17,10,2],[17,11,0],[17,12,3],[17,13,3],[17,14,1],[17,15,2],[17,16,1],[17,17,2],
      [18,8,3],[18,9,0],[18,10,1],[18,11,0],[18,12,2],[18,13,0],[18,14,3],[18,15,1],[18,16,0],[18,17,2],
      [19,8,1],[19,9,0],[19,10,3],[19,11,2],[19,12,3],[19,13,1],[19,14,0],[19,15,0],[19,16,2],[19,17,3],
      [20,8,0],[20,9,1],[20,10,0],[20,11,2],[20,12,0],[20,13,3],[20,14,0],[20,15,3],[20,16,0],[20,17,2],
      [21,8,0],[21,9,0],[21,10,0],[21,11,0],[21,12,0],[21,13,0],[21,14,0],[21,15,0],[21,16,0],[21,17,0],
      [22,8,0],[22,9,0],[22,10,0],[22,11,0],[22,12,0],[22,13,0],[22,14,0],[22,15,0],[22,16,0],[22,17,0],
      [23,8,1],[23,9,3],[23,10,0],[23,11,2],[23,12,0],[23,13,1],[23,14,2],[23,15,0],[23,16,3],[23,17,0],
      [24,8,0],[24,9,3],[24,10,1],[24,11,2],[24,12,0],[24,13,0],[24,14,1],[24,15,3],[24,16,0],[24,17,2],
      [25,8,1],[25,9,2],[25,10,0],[25,11,1],[25,12,0],[25,13,0],[25,14,3],[25,15,2],[25,16,0],[25,17,3],
      [26,8,0],[26,9,1],[26,10,0],[26,11,2],[26,12,0],[26,13,0],[26,14,1],[26,15,0],[26,16,2],[26,17,0],
      [27,8,3],[27,9,0],[27,10,1],[27,11,0],[27,12,2],[27,13,3],[27,14,1],[27,15,0],[27,16,2],[27,17,0],
      [28,8,0],[28,9,0],[28,10,0],[28,11,0],[28,12,0],[28,13,0],[28,14,0],[28,15,0],[28,16,0],[28,17,0]
              ]
  },
  {
    name: 'Drexel',
    schedule: [
      [1,8,0],[1,9,0],[1,10,0],[1,11,0],[1,12,0],[1,13,0],[1,14,0],[1,15,0],[1,16,0],[1,17,0],
      [2,8,1],[2,9,0],[2,10,2],[2,11,3],[2,12,3],[2,13,1],[2,14,0],[2,15,0],[2,16,2],[2,17,0],
      [3,8,1],[3,9,0],[3,10,0],[3,11,0],[3,12,3],[3,13,0],[3,14,0],[3,15,2],[3,16,0],[3,17,0],
      [4,8,0],[4,9,0],[4,10,1],[4,11,0],[4,12,0],[4,13,0],[4,14,3],[4,15,0],[4,16,2],[4,17,0],
      [5,8,0],[5,9,1],[5,10,0],[5,11,0],[5,12,2],[5,13,0],[5,14,1],[5,15,3],[5,16,0],[5,17,2],
      [6,8,0],[6,9,1],[6,10,0],[6,11,2],[6,12,3],[6,13,0],[6,14,0],[6,15,0],[6,16,0],[6,17,0],
      [7,8,0],[7,9,0],[7,10,0],[7,11,0],[7,12,0],[7,13,0],[7,14,0],[7,15,0],[7,16,0],[7,17,0],
      [8,8,0],[8,9,0],[8,10,0],[8,11,0],[8,12,0],[8,13,0],[8,14,0],[8,15,0],[8,16,0],[8,17,0],
      [9,8,1],[9,9,0],[9,10,2],[9,11,3],[9,12,3],[9,13,1],[9,14,0],[9,15,0],[9,16,2],[9,17,0],
      [10,8,0],[10,9,0],[10,10,3],[10,11,3],[10,12,0],[10,13,0],[10,14,1],[10,15,0],[10,16,0],[10,17,2],
      [11,8,1],[11,9,0],[11,10,0],[11,11,0],[11,12,0],[11,13,0],[11,14,0],[11,15,0],[11,16,0],[11,17,2],
      [12,8,0],[12,9,0],[12,10,1],[12,11,3],[12,12,3],[12,13,0],[12,14,2],[12,15,0],[12,16,0],[12,17,0],
      [13,8,0],[13,9,0],[13,10,3],[13,11,1],[13,12,3],[13,13,0],[13,14,2],[13,15,0],[13,16,0],[13,17,3],
      [14,8,0],[14,9,0],[14,10,0],[14,11,0],[14,12,0],[14,13,0],[14,14,0],[14,15,0],[14,16,0],[14,17,0],
      [15,8,0],[15,9,0],[15,10,0],[15,11,0],[15,12,0],[15,13,0],[15,14,0],[15,15,0],[15,16,0],[15,17,2],
      [16,8,1],[16,9,2],[16,10,0],[16,11,3],[16,12,0],[16,13,1],[16,14,0],[16,15,0],[16,16,2],[16,17,0],
      [17,8,0],[17,9,1],[17,10,2],[17,11,0],[17,12,3],[17,13,3],[17,14,1],[17,15,2],[17,16,1],[17,17,2],
      [18,8,3],[18,9,0],[18,10,1],[18,11,0],[18,12,2],[18,13,0],[18,14,3],[18,15,1],[18,16,0],[18,17,2],
      [19,8,1],[19,9,0],[19,10,3],[19,11,2],[19,12,3],[19,13,1],[19,14,0],[19,15,0],[19,16,2],[19,17,3],
      [20,8,0],[20,9,1],[20,10,0],[20,11,2],[20,12,0],[20,13,3],[20,14,0],[20,15,3],[20,16,0],[20,17,2],
      [21,8,0],[21,9,0],[21,10,0],[21,11,0],[21,12,0],[21,13,0],[21,14,0],[21,15,0],[21,16,0],[21,17,0],
      [22,8,0],[22,9,0],[22,10,0],[22,11,0],[22,12,0],[22,13,0],[22,14,0],[22,15,0],[22,16,0],[22,17,0],
      [23,8,1],[23,9,3],[23,10,0],[23,11,2],[23,12,0],[23,13,1],[23,14,2],[23,15,0],[23,16,3],[23,17,0],
      [24,8,0],[24,9,3],[24,10,1],[24,11,2],[24,12,0],[24,13,0],[24,14,1],[24,15,3],[24,16,0],[24,17,2],
      [25,8,1],[25,9,2],[25,10,0],[25,11,1],[25,12,0],[25,13,0],[25,14,3],[25,15,2],[25,16,0],[25,17,3],
      [26,8,0],[26,9,1],[26,10,0],[26,11,2],[26,12,0],[26,13,0],[26,14,1],[26,15,0],[26,16,2],[26,17,0],
      [27,8,3],[27,9,0],[27,10,1],[27,11,0],[27,12,2],[27,13,3],[27,14,1],[27,15,0],[27,16,2],[27,17,0],
      [28,8,0],[28,9,0],[28,10,0],[28,11,0],[28,12,0],[28,13,0],[28,14,0],[28,15,0],[28,16,0],[28,17,0]
              ]
  }
]

module.exports = data;


/* <% for (let i = 0; i < csvData.length; i++) { %>
  <h2><%= csvData[i].name %></h2>
  <h2><%= csvData[i].age %></h2>
  <h2><%= csvData[i].city %></h2>
<% } %> */