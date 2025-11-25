// ===== 전역 변수 =====
const galleryImages = [
    { src: '루슬란 에셋/affectionate_smile.jpg', title: 'Affectionate Smile' },
    { src: '루슬란 에셋/arrogantly_look_up_while_kneeling.jpg', title: 'Arrogantly Look Up While Kneeling' },
    { src: '루슬란 에셋/bend_down_and_look.jpg', title: 'Bend Down and Look' },
    { src: '루슬란 에셋/block_the_path.jpg', title: 'Block the Path' },
    { src: '루슬란 에셋/bloodstained_dagger.jpg', title: 'Bloodstained Dagger' },
    { src: '루슬란 에셋/bloody_battlefield.jpg', title: 'Bloody Battlefield' },
    { src: '루슬란 에셋/contempt.jpg', title: 'Contempt' },
    { src: '루슬란 에셋/discover_something.jpg', title: 'Discover Something' },
    { src: '루슬란 에셋/drink_water_seductively.jpg', title: 'Drink Water Seductively' },
    { src: '루슬란 에셋/dry_hair.jpg', title: 'Dry Hair' },
    { src: '루슬란 에셋/easy_victory.jpg', title: 'Easy Victory' },
    { src: '루슬란 에셋/feeling_annoyed.jpg', title: 'Feeling Annoyed' },
    { src: '루슬란 에셋/frustration.jpg', title: 'Frustration' },
    { src: '루슬란 에셋/gaze.jpg', title: 'Gaze' },
    { src: '루슬란 에셋/getting_irritated.jpg', title: 'Getting Irritated' },
    { src: '루슬란 에셋/grab_wrist.jpg', title: 'Grab Wrist' },
    { src: '루슬란 에셋/grip_hand_tightly.jpg', title: 'Grip Hand Tightly' },
    { src: '루슬란 에셋/grip_sword.jpg', title: 'Grip Sword' },
    { src: '루슬란 에셋/hands_bound_in_chains.jpg', title: 'Hands Bound in Chains' },
    { src: '루슬란 에셋/imprisoned.jpg', title: 'Imprisoned' },
    { src: '루슬란 에셋/joyful_laughter.jpg', title: 'Joyful Laughter' },
    { src: '루슬란 에셋/kneel_bound_in_shackles.jpg', title: 'Kneel Bound in Shackles' },
    { src: '루슬란 에셋/kneeling_and_looking_up.jpg', title: 'Kneeling and Looking Up' },
    { src: '루슬란 에셋/kneeling_on_bed.jpg', title: 'Kneeling on Bed' },
    { src: '루슬란 에셋/knowing_everything_composure.jpg', title: 'Knowing Everything Composure' },
    { src: '루슬란 에셋/leave_bathroom.jpg', title: 'Leave Bathroom' },
    { src: '루슬란 에셋/look_at_status_screen.jpg', title: 'Look at Status Screen' },
    { src: '루슬란 에셋/look_down_at_opponent.jpg', title: 'Look Down at Opponent' },
    { src: '루슬란 에셋/meaningful_smile.jpg', title: 'Meaningful Smile' },
    { src: '루슬란 에셋/minor_injury.jpg', title: 'Minor Injury' },
    { src: '루슬란 에셋/NSFW_cunnilingus_or_oral.jpg', title: 'NSFW - Intimate Scene' },
    { src: '루슬란 에셋/NSFW_masturbation_ejaculation.jpg', title: 'NSFW - Intimate Scene' },
    { src: '루슬란 에셋/NSFW_masturbation.jpg', title: 'NSFW - Intimate Scene' },
    { src: '루슬란 에셋/NSFW_missionary_sex_ejaculation.jpg', title: 'NSFW - Intimate Scene' },
    { src: '루슬란 에셋/NSFW_missionary_sex.jpg', title: 'NSFW - Intimate Scene' },
    { src: '루슬란 에셋/NSFW_shy_body_covering.jpg', title: 'NSFW - Intimate Scene' },
    { src: '루슬란 에셋/orgasm_face_closeup.jpg', title: 'Intense Expression' },
    { src: '루슬란 에셋/pillow_talk.jpg', title: 'Pillow Talk' },
    { src: '루슬란 에셋/provoke.jpg', title: 'Provoke' },
    { src: '루슬란 에셋/pull_in.jpg', title: 'Pull In' },
    { src: '루슬란 에셋/push_away.jpg', title: 'Push Away' },
    { src: '루슬란 에셋/rage.jpg', title: 'Rage' },
    { src: '루슬란 에셋/reach_out_hand.jpg', title: 'Reach Out Hand' },
    { src: '루슬란 에셋/shameless_attitude.jpg', title: 'Shameless Attitude' },
    { src: '루슬란 에셋/sharp_attack.jpg', title: 'Sharp Attack' },
    { src: '루슬란 에셋/slash_opponent.jpg', title: 'Slash Opponent' },
    { src: '루슬란 에셋/sleep_in_poor_bed.jpg', title: 'Sleep in Poor Bed' },
    { src: '루슬란 에셋/smile.jpg', title: 'Smile' },
    { src: '루슬란 에셋/strenuous_battle.jpg', title: 'Strenuous Battle' },
    { src: '루슬란 에셋/take_combat_stance.jpg', title: 'Take Combat Stance' },
    { src: '루슬란 에셋/take_off_clothes.jpg', title: 'Take Off Clothes' },
    { src: '루슬란 에셋/take_shower.jpg', title: 'Take Shower' },
    { src: '루슬란 에셋/tears_of_happiness.jpg', title: 'Tears of Happiness' },
    { src: '루슬란 에셋/tears_of_sadness.jpg', title: 'Tears of Sadness' },
    { src: '루슬란 에셋/teasing_attitude.jpg', title: 'Teasing Attitude' },
    { src: '루슬란 에셋/teasing_smile.jpg', title: 'Teasing Smile' },
    { src: '루슬란 에셋/wake_up_slightly.jpg', title: 'Wake Up Slightly' }
];

let currentImageIndex = 0;

// ===== DOM 로드 후 초기화 =====
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initMusicToggle();
    initGallery();
    initLightbox();
    initScrollAnimations();
    initSmoothScroll();
});

// ===== 파티클 효과 =====
function initParticles() {
    const particles = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(212, 175, 55, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.pointerEvents = 'none';
        
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.animation = `float ${duration}s ${delay}s infinite ease-in-out`;
        
        particles.appendChild(particle);
    }
}

// ===== 음악 토글 =====
function initMusicToggle() {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    let isPlaying = false;
    
    musicToggle.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            musicToggle.classList.remove('playing');
        } else {
            bgMusic.play().catch(err => {
                console.log('음악 재생 오류:', err);
            });
            musicToggle.classList.add('playing');
        }
        isPlaying = !isPlaying;
    });
    
    // 음악이 끝나면 자동 반복
    bgMusic.addEventListener('ended', () => {
        bgMusic.currentTime = 0;
        bgMusic.play();
    });
}

// ===== 갤러리 초기화 =====
function initGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    galleryImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.title}" loading="lazy">
            <div class="gallery-overlay">
                <div class="gallery-title">${image.title}</div>
            </div>
        `;
        
        galleryItem.addEventListener('click', () => {
            openLightbox(index);
        });
        
        galleryGrid.appendChild(galleryItem);
    });
}

// ===== 라이트박스 초기화 =====
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
    lightboxNext.addEventListener('click', () => navigateLightbox(1));
    
    // ESC 키로 닫기
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
        if (e.key === 'ArrowLeft' && lightbox.classList.contains('active')) {
            navigateLightbox(-1);
        }
        if (e.key === 'ArrowRight' && lightbox.classList.contains('active')) {
            navigateLightbox(1);
        }
    });
    
    // 배경 클릭으로 닫기
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    
    currentImageIndex = index;
    lightboxImg.src = galleryImages[index].src;
    lightboxImg.alt = galleryImages[index].title;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function navigateLightbox(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    } else if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }
    
    const lightboxImg = document.getElementById('lightboxImg');
    lightboxImg.style.opacity = '0';
    
    setTimeout(() => {
        lightboxImg.src = galleryImages[currentImageIndex].src;
        lightboxImg.alt = galleryImages[currentImageIndex].title;
        lightboxImg.style.opacity = '1';
    }, 150);
}

// ===== 스크롤 애니메이션 =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
}

// ===== 부드러운 스크롤 =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // 네비게이션 높이 고려
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== 네비게이션 스크롤 효과 =====
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
        nav.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ===== 이미지 로드 오류 처리 =====
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.style.display = 'none';
        console.log('이미지 로드 실패:', e.target.src);
    }
}, true);

// ===== 페이지 로드 완료 후 애니메이션 =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

