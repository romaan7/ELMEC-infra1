/**
 * TeamCard — leadership profile card.
 * Portrait (3:4 crop — keep commissioned photography consistent), name,
 * role and a one-line bio. Semantic and screen-reader friendly.
 */
export default function TeamCard({ member }) {
  return (
    <article className="h-full bg-white">
      <div className="overflow-hidden bg-mist">
        {/* PLACEHOLDER PORTRAIT — replace with commissioned photography, consistent 3:4 crop. */}
        <img
          src={member.photo}
          alt={member.photoAlt}
          loading="lazy"
          className="aspect-[3/4] w-full object-cover"
        />
      </div>
      <div className="border-b border-grey-200 py-5">
        <h3 className="font-display text-h4 font-semibold text-navy">{member.name}</h3>
        <p className="mt-0.5 text-caption font-medium uppercase tracking-[0.12em] text-steel">{member.role}</p>
        {member.bio && <p className="mt-3 text-caption leading-relaxed text-grey-500">{member.bio}</p>}
      </div>
    </article>
  );
}
