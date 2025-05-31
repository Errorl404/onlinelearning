const courses = [
  { id: 1, title: "HTML cơ bản", description: "Khóa học học cách tạo trang web với HTML." },
  { id: 2, title: "CSS cơ bản", description: "Học cách tạo style đẹp cho trang web với CSS." },
  { id: 3, title: "JavaScript cơ bản", description: "Tìm hiểu cách lập trình tương tác với JavaScript." },
];

// Hiển thị danh sách khóa học
const courseListEl = document.getElementById("courses");
const courseDetailEl = document.getElementById("course-detail");
const courseTitleEl = document.getElementById("course-title");
const courseDescEl = document.getElementById("course-description");
const backButton = document.getElementById("back-button");

function showCourseList() {
  courseDetailEl.style.display = "none";
  courseListEl.parentElement.style.display = "block";
}

function showCourseDetail(id) {
  const course = courses.find(c => c.id === id);
  if (!course) return;

  courseTitleEl.textContent = course.title;
  courseDescEl.textContent = course.description;

  courseListEl.parentElement.style.display = "none";
  courseDetailEl.style.display = "block";
}

courses.forEach(course => {
  const li = document.createElement("li");
  li.textContent = course.title;
  li.addEventListener("click", () => showCourseDetail(course.id));
  courseListEl.appendChild(li);
});

backButton.addEventListener("click", showCourseList);

// Khởi đầu hiển thị danh sách khóa học
showCourseList();
