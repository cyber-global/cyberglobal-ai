// Optional: For future MDX content integration
// This component can be enhanced with contentlayer when needed

interface MDXRemoteProps {
  content: string;
  components?: Record<string, React.ComponentType>;
}

export function MDXRemote({ content }: MDXRemoteProps) {
  // Basic implementation - enhance with MDX when needed
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

