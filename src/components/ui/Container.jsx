/**
 * Container — the max-width layout wrapper.
 * Owns the horizontal grid discipline for the whole site: 1280px max width
 * with comfortable responsive gutters. Every section composes through this
 * so all content shares one precise alignment.
 */
export default function Container({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag className={`mx-auto w-full max-w-container px-5 sm:px-8 lg:px-12 ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
