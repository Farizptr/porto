import { motion } from 'framer-motion';

interface StatusBadgeProps {
  text: string;
  type?: 'green' | 'yellow' | 'red';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ text, type = 'green' }) => {
  // Dark mode colors only
  let bgColor = 'rgba(0, 179, 134, 0.2)';
  let textColor = '#00e6ac';

  if (type === 'yellow') {
    bgColor = 'rgba(204, 136, 0, 0.2)';
    textColor = '#ffb300';
  } else if (type === 'red') {
    bgColor = 'rgba(204, 0, 0, 0.2)';
    textColor = '#ff3333';
  }

  return (
    <motion.div
      className="inline-flex items-center rounded-full py-1 px-3 text-sm"
      style={{
        backgroundColor: bgColor,
        color: textColor
      }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.span
        className="mr-2 inline-block h-2 w-2 rounded-full"
        style={{ backgroundColor: textColor }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
      />
      {text}
    </motion.div>
  );
};

export default StatusBadge;
