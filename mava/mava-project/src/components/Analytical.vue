<template>
  <div class="analytical-dashboard">
    <div class="stats-cards">
      <div class="card users">
        <h3>Users</h3>
        
      </div>
      <div class="card views">
        <h3>Views</h3>
        
      </div>
      <div class="card conversion">
        <h3>Conversion</h3>
        
      </div>
      <div class="card revenue">
        <h3>Revenue</h3>
        
      </div>
    </div>

    <div class="statistics">
      <h2>Statistics</h2>
      <!-- Add chart or graph component here -->
    </div>

    
  </div>
</template>

<script lang="ts">
export default {
  name: 'Analytical',
}

</script>

<style scoped>
.analytical-dashboard {
  padding: 20px;
}

.stats-cards {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.card {
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-right: 10px;
  text-align: center;
}

.card:last-child {
  margin-right: 0;
}

.statistics, .progress-section, .report-section {
  margin-bottom: 20px;
}

.progress-table {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.progress-header, .progress-row {
  display: grid;
  grid-template-columns: 20px 1fr 1fr 100px 1fr;
  padding: 10px;
}

.progress-header {
  background-color: #f5f5f5;
}

.progress-row:nth-child(even) {
  background-color: #f9f9f9;
}

.activity-dots {
  display: flex;
}

.dot {
  width: 8px;
  height: 8px;
  background-color: #ccc;
  border-radius: 50%;
  margin-right: 5px;
}

.progress-bar {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 8px;
  background-color: #eee;
  border-radius: 4px;
  margin-left: 10px;
}

.progress {
  height: 100%;
  border-radius: 4px;
}

.green {
  background-color: green;
}

.blue {
  background-color: blue;
}

.orange {
  background-color: orange;
}

.red {
  background-color: red;
}

.gray {
  background-color: gray;
}

.report-section h2, .progress-section h2, .statistics h2 {
  margin-bottom: 10px;
}

.report-stats {
  display: flex;
  justify-content: space-between;
}

.stat-item {
  flex: 1;
  margin-right: 10px;
}

.stat-item:last-child {
  margin-right: 0;
}
</style>
