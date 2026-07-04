
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.add('js-ready');
  
  // Add event listener to the Home button/link
  let homeLink = document.getElementById('home-link');
  if (homeLink) {
    homeLink.addEventListener('click', function(e) {
        e.preventDefault();
        loadLandingPage();
    });
  }
});
// Add event listener to the login button
let userLogin = document.getElementById('login-btn');
if (userLogin) {
  userLogin.addEventListener('click', function() {
      loginpage();
  });
}
// Add event listener to the register button
let userRegister = document.getElementById('register-btn');
if (userRegister) {
  userRegister.addEventListener('click', function() {
      registerpage();
  });
}
// Function to inject landing page content
function loadLandingPage() {
    document.body.className = 'landing-page';
    const content = document.getElementById('content');
    
    content.innerHTML = `
        <section class="main-discription" style="padding: 40px 20px; text-align: center;">
            <div class="discription-heading">
                <h1 style="font-size: 2.8rem; font-weight: 800; line-height: 1.2; color: var(--text); margin-bottom: 20px; font-family: 'Inter', sans-serif;">Odoo Admas HRMS: Streamlining Workforce Management and Payroll Accuracy</h1> 
            </div>
            <div class="discription-text">
                <p style="font-size: 1.2rem; font-weight: 400; line-height: 1.6; color: var(--text-light); max-width: 800px; margin: 0 auto 30px auto; font-family: 'Inter', sans-serif;">Digitize and automate your core HR operations with an integrated platform built for efficiency. Seamlessly manage employee profiles, track attendance, and process leave requests in real time. Empower admins with complete payroll visibility and simplified approval workflows to eliminate administrative burnout.</p>
            </div>
            <div class="cta-container" style="margin-top: 20px; margin-bottom: 40px;">
                <button id="hero-cta-btn" style="padding: 14px 28px; font-size: 1.1rem; font-weight: 700; color: white; background-color: var(--primary); border: none; border-radius: 30px; cursor: pointer; transition: background-color 0.2s, transform 0.1s; box-shadow: 0 4px 6px rgba(0,0,0,0.1); font-family: 'Inter', sans-serif;" onmouseover="this.style.backgroundColor='#b05e1a'; this.style.transform='scale(1.02)'" onmouseout="this.style.backgroundColor='var(--primary)'; this.style.transform='scale(1)'">Get Started</button>
            </div>
        </section>

        <section class="example-boxes" style="margin-top: 20px; margin-bottom: 40px;">
            <div class="box-landingpage" style="height: auto; min-height: 180px; padding: 20px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <div class="box-content-heding" style="margin-bottom: 10px; padding: 0;">
                    <p style="font-size: 1.25rem; font-weight: 700; color: var(--text); font-family: 'Inter', sans-serif; margin: 0;">Employee Self-Service</p>
                </div>
                <div class="box-content-text" style="padding: 0;">
                    <p style="font-size: 0.95rem; font-weight: 400; line-height: 1.5; color: var(--text-light); font-family: 'Inter', sans-serif; margin: 0;">Enable team members to view profiles, log attendance with check-in/check-out tracking, apply for time-off, and access read-only payroll statements.</p>
                </div>
            </div>
            <div class="box-landingpage" style="height: auto; min-height: 180px; padding: 20px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <div class="box-content-heding" style="margin-bottom: 10px; padding: 0;">
                    <p style="font-size: 1.25rem; font-weight: 700; color: var(--text); font-family: 'Inter', sans-serif; margin: 0;">Admin Control Center</p>
                </div>
                <div class="box-content-text" style="padding: 0;">
                    <p style="font-size: 0.95rem; font-weight: 400; line-height: 1.5; color: var(--text-light); font-family: 'Inter', sans-serif; margin: 0;">Provide HR officers with unified tools to manage employee lists, monitor real-time daily/weekly attendance logs, and process approvals.</p>
                </div>
            </div>
            <div class="box-landingpage" style="height: auto; min-height: 180px; padding: 20px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <div class="box-content-heding" style="margin-bottom: 10px; padding: 0;">
                    <p style="font-size: 1.25rem; font-weight: 700; color: var(--text); font-family: 'Inter', sans-serif; margin: 0;">Secure Payroll & Approvals</p>
                </div>
                <div class="box-content-text" style="padding: 0;">
                    <p style="font-size: 0.95rem; font-weight: 400; line-height: 1.5; color: var(--text-light); font-family: 'Inter', sans-serif; margin: 0;">Maintain accurate payroll configurations, process salary updates securely, and streamline multi-tier approval workflows with full visibility.</p>
                </div>
            </div>
            <div class="final-content" style="margin-top: 40px; text-align: center; grid-column: span 3;">
                <div class="final-content-heading" style="margin-bottom: 15px;">
                    <h2 style="font-size: 2.2rem; font-weight: 700; color: #2c3e50; font-family: 'Inter', sans-serif; margin: 0;">Ready to Optimize Your HR Operations?</h2>
                </div>
                <div class="final-content-text" style="margin-bottom: 25px;">
                    <p style="font-size: 1.15rem; font-weight: 400; line-height: 1.6; color: #555; max-width: 700px; margin: 0 auto; font-family: 'Inter', sans-serif;">Experience a secure, role-based platform designed to align every workday perfectly. Sign up today to start streamlining onboarding, attendance, and payroll.</p>
                </div>
                <div class="cta-container">
                    <button id="final-cta-btn" style="padding: 12px 24px; font-size: 1rem; font-weight: 700; color: white; background-color: var(--secondary); border: none; border-radius: 30px; cursor: pointer; transition: background-color 0.2s, transform 0.1s; box-shadow: 0 4px 6px rgba(0,0,0,0.1); font-family: 'Inter', sans-serif;" onmouseover="this.style.backgroundColor='#d6872c'; this.style.transform='scale(1.02)'" onmouseout="this.style.backgroundColor='var(--secondary)'; this.style.transform='scale(1)'">Create Account</button>
                </div>
            </div>
        </section>
    `;

    // Hook up click handlers for CTA buttons
    const heroCtaBtn = document.getElementById('hero-cta-btn');
    if (heroCtaBtn) {
        heroCtaBtn.addEventListener('click', () => {
            loginpage();
        });
    }
    const finalCtaBtn = document.getElementById('final-cta-btn');
    if (finalCtaBtn) {
        finalCtaBtn.addEventListener('click', () => {
            registerpage();
        });
    }
}
// Function to inject the login page
function loginpage() {
    document.body.className = 'login-page';
    const content = document.getElementById('content');
    
    content.innerHTML = `
        <section class="login-section">
            <div class="login-form">
                <form>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                    <button type="submit" id="login-page-btn">Login</button>
                    <button type="button" id="login-page-register-btn">new-user-register</button>
                    </form>
            </div>
        </section>
    `;

    // Hook up new-user-register button click handler
    const registerPageBtn = document.getElementById('login-page-register-btn');
    if (registerPageBtn) {
        registerPageBtn.addEventListener('click', function() {
            registerpage();
        });
    }
} 
// Function to inject the register page    
function registerpage() {
    document.body.className = 'register-page';
    const content = document.getElementById('content');
    
    content.innerHTML = `
        <section class="register-section">
            <div class="register-form"> 
                <form id="register-form-el">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                    
                    <div class="role-toggle-container" style="display: flex; flex-direction: column; gap: 8px; margin-top: 5px; margin-bottom: 10px;">
                        <label style="font-weight: 500; color: var(--text);">Register As:</label>
                        <div style="display: flex; border: 1px solid var(--border); border-radius: 5px; overflow: hidden; background: #fff;">
                            <button type="button" id="role-employee-btn" style="flex: 1; padding: 10px; border: none; font-weight: 600; font-family: 'Inter', sans-serif; cursor: pointer; transition: all 0.2s; background-color: var(--primary); color: white;">Employee</button>
                            <button type="button" id="role-hr-btn" style="flex: 1; padding: 10px; border: none; font-weight: 600; font-family: 'Inter', sans-serif; cursor: pointer; transition: all 0.2s; background-color: transparent; color: var(--text-light);">HR</button>
                        </div>
                        <input type="hidden" id="user-role" name="role" value="Employee">
                    </div>

                    <button type="submit" id="register-page-btn">Register</button>
                </form>
            </div>
        </section>
    `;

    // Hook up toggle button functionality
    const empBtn = document.getElementById('role-employee-btn');
    const hrBtn = document.getElementById('role-hr-btn');
    const roleInput = document.getElementById('user-role');

    if (empBtn && hrBtn && roleInput) {
        empBtn.addEventListener('click', () => {
            roleInput.value = 'Employee';
            empBtn.style.backgroundColor = 'var(--primary)';
            empBtn.style.color = 'white';
            hrBtn.style.backgroundColor = 'transparent';
            hrBtn.style.color = 'var(--text-light)';
        });

        hrBtn.addEventListener('click', () => {
            roleInput.value = 'HR';
            hrBtn.style.backgroundColor = 'var(--primary)';
            hrBtn.style.color = 'white';
            empBtn.style.backgroundColor = 'transparent';
            empBtn.style.color = 'var(--text-light)';
        });
    }

    // Hook up form submission behavior
    const registerForm = document.getElementById('register-form-el');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (username && email && password) {
                if (roleInput.value === 'HR') {
                    alert('you have been logined as hr');
                } else {
                    alert('you have been logined as employee');
                }
            }
        });
    }
} 


// Run it when the page loads
document.addEventListener('DOMContentLoaded', loadLandingPage);