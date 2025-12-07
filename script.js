document.addEventListener('DOMContentLoaded', function() {
    
    // ১. ড্রপডাউন মেনু হ্যান্ডলিং
    const createPostBtn = document.getElementById('createPostBtn');
    const postDropdown = document.getElementById('postDropdown');

    // (+) বাটনে ক্লিক করলে মেনু আসবে/যাবে
    createPostBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // ক্লিক ইভেন্ট বাবলিং বন্ধ করা
        postDropdown.classList.toggle('active');
    });

    // স্ক্রিনের অন্য কোথাও ক্লিক করলে মেনু বন্ধ হবে
    window.addEventListener('click', function(event) {
        if (!createPostBtn.contains(event.target) && !postDropdown.contains(event.target)) {
            postDropdown.classList.remove('active');
        }
    });

    // ২. ট্যাব বাটন ইন্টারেক্টিভ করা (একটিভ ক্লাস এড করা)
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // সব ট্যাব থেকে 'active' ক্লাস রিমুভ করা
            tabs.forEach(t => t.classList.remove('active'));
            
            // যেটাতে ক্লিক করা হয়েছে, সেটাতে 'active' ক্লাস যোগ করা
            this.classList.add('active');
        });
    });

    // ৩. লাইক বাটন ইন্টারেকশন (উদাহরণ)
    const actionBtns = document.querySelectorAll('.action-btn');
    
    actionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // এখানে আপনি চাইলে আরও লজিক এড করতে পারেন
            // বর্তমানে শুধু একটি ইফেক্ট দেখানোর জন্য কালার চেঞ্জ করা হলো
            if(this.style.color === 'var(--primary-color)') {
                this.style.color = 'var(--text-gray)';
            } else {
                this.style.color = 'var(--primary-color)';
            }
        });
    });

});