<template>
  <div class="dropdown">
    <slot></slot>
  </div>
</template>

<script>
export default{}
</script>

<style>
.dropdown {
  position: relative;
  margin: auto;
  margin-left: 240px;
}
.dropdown-btn {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #dfe7eb;
  white-space: nowrap;
}

.dropdown-content {
  background: #fff;
  width: 100%;
  display: none;
  position: absolute;
  left: 0%;
  overflow: hidden;
}
.dropdown-item {
  padding: 0.5rem 1rem;
  cursor: pointer;
}
.dropdown-item:hover {
  background: #dfe7eb;
}
.dropdown-btn:hover {
  background: #28313e#dfe7eb;
}
.dropdown:hover .dropdown-content {
  display: block;
  border: 1px solid #dfe7eb;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .dropdown {
    margin-left: auto;
  }
}
</style>