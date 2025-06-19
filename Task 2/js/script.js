function handleSubmit(e) {
    e.preventDefault();
    if(confirm('Are you sure you want to submit this form?')) {
        e.target.reset();
        alert('Thank you for your message! We will respond shortly.');
    }
    return false;
}
document.getElementById('currentDate').textContent = new Date().toLocaleString();