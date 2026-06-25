function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <div>
          <p className="eyebrow">React.js Landing Page</p>
          <h1>What is Nginx?</h1>
          <p className="hero-copy">
            Nginx is a fast, reliable web server and reverse proxy. It is commonly used to serve static sites, proxy requests to application servers, and handle SSL termination.
          </p>
        </div>
      </header>

      <main>
        <section className="card">
          <h2>Key Nginx Concepts</h2>
          <ul>
            <li>
              <strong>Web server:</strong> Serves HTML, CSS, JavaScript, and other assets.
            </li>
            <li>
              <strong>Reverse proxy:</strong> Forwards requests to backend applications or APIs.
            </li>
            <li>
              <strong>Load balancer:</strong> Distributes traffic across multiple services.
            </li>
            <li>
              <strong>Config file:</strong> Usually stored at <code>/etc/nginx/nginx.conf</code>.
            </li>
          </ul>
        </section>

        <section className="card">
          <h2>Basic Commands</h2>
          <p>Use these commands on Linux to manage Nginx safely.</p>
          <div className="code-block">
            <p><code>sudo nginx -t</code> - Test the configuration for syntax errors.</p>
            <p><code>sudo systemctl start nginx</code> - Start Nginx.</p>
            <p><code>sudo systemctl stop nginx</code> - Stop Nginx.</p>
            <p><code>sudo systemctl restart nginx</code> - Restart Nginx.</p>
            <p><code>sudo systemctl reload nginx</code> - Apply config changes without dropping connections.</p>
          </div>
        </section>

        <section className="card">
          <h2>How to Step Through the Config</h2>
          <ol>
            <li>Open the main file: <code>/etc/nginx/nginx.conf</code>.</li>
            <li>Identify included files such as <code>sites-available</code> and <code>sites-enabled</code>.</li>
            <li>Find the server block for your site.</li>
            <li>Verify keys like <code>listen</code>, <code>server_name</code>, and <code>root</code>.</li>
            <li>Test with <code>sudo nginx -t</code> and reload with <code>sudo systemctl reload nginx</code>.</li>
          </ol>
          <div className="code-block">
            <pre>{`server {
  listen 80;
  server_name example.com www.example.com;

  root /var/www/html;
  index index.html index.htm;

  location / {
    try_files $uri $uri/ =404;
  }
}`}</pre>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Simple guide built with React and Vite.</p>
      </footer>
    </div>
  );
}

export default App;
