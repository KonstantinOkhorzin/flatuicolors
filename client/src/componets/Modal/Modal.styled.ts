import styled from '@emotion/styled';
import { motion, MotionProps } from 'framer-motion'; 

export const Backdrop = styled(motion.div)<MotionProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;
