import { useEffect, useState } from "react";

const USERNAME = "Daniyal197"; 

export default function GitHubStats() {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const userRes = await fetch(`https://api.github.com/users/${USERNAME}`);
        if (!userRes.ok) throw new Error("user fetch failed");
        const user = await userRes.json();

        const reposRes = await fetch(
          `https://api.github.com/users/${USERNAME}/repos?per_page=100`
        );
        const repos = reposRes.ok ? await reposRes.json() : [];
        const totalStars = Array.isArray(repos)
          ? repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0)
          : 0;

        if (!cancelled) {
          setStats({
            repos: user.public_repos,
            followers: user.followers,
            stars: totalStars,
            since: new Date(user.created_at).getFullYear(),
          });
        }
      } catch (e) {
        if (!cancelled) setError(true);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="rounded-lg border border-border-bright bg-surface overflow-hidden card-hover">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-surface-2">
        <span className="w-2.5 h-2.5 rounded-full bg-alert/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-text-dim" />
        <span className="w-2.5 h-2.5 rounded-full bg-primary-dim" />
        <span className="ml-2 font-mono text-[11px] text-text-muted">github --stats</span>
      </div>

      <div className="p-5 font-mono text-[13px] leading-7">
        {error && (
          <p className="text-text-muted">
            <span className="text-alert">error:</span> could not reach github api
          </p>
        )}

        {!error && !stats && (
          <p className="text-text-dim">
            fetching stats<span className="cursor-blink" />
          </p>
        )}

        {stats && (
          <>
            <p>
              <span className="text-primary">repos</span>
              <span className="text-text-dim">: </span>
              <span className="text-text-muted">{stats.repos}</span>
            </p>
            <p>
              <span className="text-primary">stars</span>
              <span className="text-text-dim">: </span>
              <span className="text-text-muted">{stats.stars}</span>
            </p>
            <p>
              <span className="text-primary">followers</span>
              <span className="text-text-dim">: </span>
              <span className="text-text-muted">{stats.followers}</span>
            </p>
            <p>
              <span className="text-primary">member since</span>
              <span className="text-text-dim">: </span>
              <span className="text-text-muted">{stats.since}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}