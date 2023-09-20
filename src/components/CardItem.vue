<template>
  <div class="card">
    <div class="card-content">
      <div class="card-content-header">
        <div>
          <img src="../assets/images/header.svg" alt="plan" />
        </div>
      </div>

      <div class="card-content-body">
        <div class="card-content-image">
          <div>
            <img src="../assets/images/plan.svg" alt="plan" />
          </div>
        </div>

        <!-- <div class="card-content-number">42</div> -->
      </div>

      <div class="card-content-footer">
        <div>
          <img src="../assets/images/footer.svg" alt="plan" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4vh;

  width: 270px;
  height: 400px;

  padding: 24px, 16px, 24px, 16px;
  border-radius: 20px;
  border: 1px;
  gap: 10px;

  /* background: linear-gradient(
      0deg,
      rgba(35, 25, 45, 0.1),
      rgba(35, 25, 45, 0.1)
    ),
    linear-gradient(0deg, #ffffff, #ffffff);

  border: 1px solid #23192d1a; */
}

.card-content {
  /* display: flex;
  align-items: center;
  justify-content: center; */

  border: solid 1px #ccc;
  border-radius: 4%;

  width: 238px;
  height: 362px;
}

.card-content-header {
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2vh;

  width: 238px;
  height: fit-content;
}
.card-content-body {
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2vh;
  margin-left: 0.65vw;


  /* background-color: aqua; */

  border: solid 1px #ccc;
  border-radius: 4%;

  
  width: 220px;
  height: 256px;
  
}
.card-content-number {
  background-color: red;

  display: flex;
  align-items: center;
  align-self: flex-end;

  width: fit-content;
  height: fit-content;

  font-size: 2rem;
}
.card-content-image {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.card-content-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-top: 1.5vh;

  width: 238px;
  height: 42px;
}
</style>
