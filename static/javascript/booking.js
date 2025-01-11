document.addEventListener('DOMContentLoaded', function () {
    const roomSelect = document.getElementById('room_id');
    const checkInDate = document.getElementById('check_in_date');
    const checkOutDate = document.getElementById('check_out_date');
    const totalAmount = document.getElementById('total_amount');

    function calculateTotalAmount() {
        const selectedRoom = roomSelect.options[roomSelect.selectedIndex].text.match(/₦(\d+)/);
        const roomPrice = selectedRoom ? parseFloat(selectedRoom[1]) : 0;
        
        const inDate = new Date(checkInDate.value);
        const outDate = new Date(checkOutDate.value);
        const nights = (outDate - inDate) / (1000 * 60 * 60 * 24) || 1;  // Calculate number of nights

        totalAmount.value = roomPrice * nights;
    }

    roomSelect.addEventListener('change', calculateTotalAmount);
    checkInDate.addEventListener('change', calculateTotalAmount);
    checkOutDate.addEventListener('change', calculateTotalAmount);
});