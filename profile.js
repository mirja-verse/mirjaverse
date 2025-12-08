document.addEventListener('DOMContentLoaded', function() {

    // ১. এডিট বাটনে ক্লিক করলে এলার্ট দেখাবে
    const editBtn = document.getElementById('editProfileBtn');
    if(editBtn) {
        editBtn.addEventListener('click', function() {
            alert('বর্তমানে এডিট অপশন বন্ধ আছে। শীঘ্রই চালু হবে!');
        });
    }

    // ২. স্টোরি বাটন
    const storyBtn = document.getElementById('addStoryBtn');
    if(storyBtn) {
        storyBtn.addEventListener('click', function() {
            alert('গ্যালারি ওপেন হচ্ছে...');
        });
    }

    // ৩. প্রোফাইল মেনু ট্যাগিং (এক্টিভ ক্লাস পরিবর্তন)
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // ৪. লাইক বাটন কালার চেঞ্জ
    const actionBtns = document.querySelectorAll('.action-btn');
    
    actionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if(this.style.color === 'rgb(108, 92, 231)') { // বেগুনি কালার
                this.style.color = '#65676b';
            } else {
                this.style.color = '#6c5ce7';
            }
        });
    });

});