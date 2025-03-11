document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("booking-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // ป้องกันการส่งฟอร์มก่อนตรวจสอบ

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const numTravelers = document.getElementById("num-travelers").value;
        const joinLand = document.getElementById("join-land").checked;

        // ตรวจสอบค่าที่ต้องไม่เป็นค่าว่าง
        if (name === "") {
            alert("กรุณากรอกชื่อผู้ติดต่อ");
            return;
        }
        if (phone === "") {
            alert("กรุณากรอกเบอร์โทร");
            return;
        }

        // ตรวจสอบจำนวนผู้ร่วมเดินทาง
        const numTravelersValue = parseInt(numTravelers, 10);
        if (isNaN(numTravelersValue) || numTravelersValue < 1 || numTravelersValue > 15) {
            alert("จำนวนผู้ร่วมเดินทางต้องอยู่ระหว่าง 1 ถึง 15 คน");
            return;
        }

        // ตรวจสอบหากต้องการซื้อบัตรโดยสารเครื่องบินเอง
        if (joinLand) {
            const confirmJoinLand = confirm("ต้องการซื้อบัตรโดยสารเครื่องบินเองใช่หรือไม่?");
            if (confirmJoinLand) {
                alert("คุณเลือกซื้อบัตรโดยสารเครื่องบินเอง");
            }
        }

        alert("แบบฟอร์มถูกส่งเรียบร้อย!");
        form.submit();
    });
});