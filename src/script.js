$(document).ready(function() {
    console.log("SGLonelyGuy Club Script Initialized");

    // Sample data
    const profiles = [
        { id: 1, name: 'Tiffany', code: '3967', location: 'Toa Payoh', area: 'Central', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500', isPremium: true, isRecommended: true },
        { id: 2, name: 'Lulu', code: '4362', location: 'Tiong Bahru', area: 'Central', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500', isPremium: true, isRecommended: true },
        { id: 3, name: 'Luna', code: '4566', location: 'Farrer Park', area: 'Central', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500', isPremium: true, isRecommended: false },
        { id: 4, name: 'Tina', code: '4628', location: 'Ang Mo Kio', area: 'North East', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500', isPremium: true, isRecommended: true }
    ];

    // Function to render profiles
    function renderProfiles(targetId, data) {
        let html = '';
        data.forEach(p => {
            html += `
                <div class="col-6 col-md-4 col-xl-3 mb-4">
                    <div class="profile-card neon-border cursor-pointer view-profile" data-id="${p.id}">
                        ${p.isPremium ? '<div class="premium-badge">PREMIUM</div>' : ''}
                        <img src="${p.image}" alt="${p.name}">
                        <div class="card-overlay">
                            ${p.isRecommended ? '<div class="recommended-badge">Recommended</div>' : ''}
                            <h5 class="m-0 font-weight-bold" style="font-size: 14px;">${p.name} (${p.code})</h5>
                            <small class="text-white-50 uppercase" style="font-size: 10px;">${p.location}; ${p.area}</small>
                        </div>
                    </div>
                </div>
            `;
        });
        $(`#${targetId}`).html(html);
    }

    // Initial render
    renderProfiles('premium-girls-grid', profiles);
    renderProfiles('new-girls-grid', profiles.reverse());

    // Routing Simulation
    $(document).on('click', '.view-profile', function() {
        const id = $(this).data('id');
        const profile = profiles.find(p => p.id == id);
        showDetail(profile);
    });

    $(document).on('click', '.nav-home', function(e) {
        e.preventDefault();
        $('#page-home').show();
        $('#page-detail').hide();
        window.scrollTo(0,0);
    });

    function showDetail(p) {
        $('#detail-name').text(`${p.name} (${p.code})`);
        $('#detail-location').text(p.location);
        $('#detail-area').text(p.area);
        $('#detail-main-img').attr('src', p.image);
        
        $('#page-home').hide();
        $('#page-detail').show();
        window.scrollTo(0,0);
    }
});
