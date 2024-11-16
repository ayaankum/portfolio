import { Database, Power} from "lucide-react"

export default function Component() {
  return (
    <div className="p-6 text-white max-w-5xl mx-auto">
      <h2 className="text-6xl font-bold mb-12 text-blue-400 [text-shadow:_0_0_10px_rgb(59_130_246_/_50%)]">
        Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        {/* React.js Card */}
        <div className="relative group">
          <div className="absolute inset-0.5 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200" />
          <div className="relative bg-slate-900 rounded-lg p-6 h-full border border-blue-500/20">
            
            <div className="flex flex-col items-center justify-center space-y-4">
              <svg viewBox="0 0 24 24" className="w-16 h-16 text-blue-400" fill="currentColor">
                <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" />
              </svg>
              <h3 className="text-2xl font-bold text-blue-400 [text-shadow:_0_0_10px_rgb(59_130_246_/_50%)]">React.js</h3>
            </div>
          </div>
        </div>

        {/* Next.js Card */}
        <div className="relative group">
          <div className="relative bg-slate-900 rounded-lg p-6 h-full border border-blue-500/20">
            
            <div className="flex flex-col items-center justify-center space-y-4">
              <svg viewBox="0 0 24 24" className="w-16 h-16 text-blue-400" fill="currentColor">
                <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.049-.106.005-4.703.007-4.705.073-.091a.637.637 0 0 1 .174-.143c.096-.047.134-.052.54-.052.479 0 .558.019.683.155a466.83 466.83 0 0 1 2.895 4.361c1.558 2.362 3.687 5.587 4.734 7.171l1.9 2.878.096-.063a12.317 12.317 0 0 0 2.465-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
              </svg>
              <h3 className="text-2xl font-bold text-blue-400 [text-shadow:_0_0_10px_rgb(59_130_246_/_50%)]">Next.js</h3>
            </div>
          </div>
        </div>

        {/* Tailwind Card */}
        <div className="relative group">
          <div className="relative bg-slate-900 rounded-lg p-6 h-full border border-blue-500/20">
            
            <div className="flex flex-col items-center justify-center space-y-4">
              <svg viewBox="0 0 24 24" className="w-16 h-16 text-blue-400" fill="currentColor">
                <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
              </svg>
              <h3 className="text-2xl font-bold text-blue-400 [text-shadow:_0_0_10px_rgb(59_130_246_/_50%)]">Tailwind</h3>
            </div>
          </div>
        </div>

        {/* Java Card */}
        <div className="relative group">
          <div className="relative bg-slate-900 rounded-lg p-6 h-full border border-blue-500/20">
            
            <div className="flex flex-col items-center justify-center space-y-4">
              <svg viewBox="0 0 24 24" className="w-16 h-16 text-blue-400" fill="currentColor">
                <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" />
              </svg>
              <h3 className="text-2xl font-bold text-blue-400 [text-shadow:_0_0_10px_rgb(59_130_246_/_50%)]">Java</h3>
            </div>
          </div>
        </div>

        {/* Spring Boot Card */}
        <div className="relative group">
          <div className="relative bg-slate-900 rounded-lg p-6 h-full border border-blue-500/20">
            
            <div className="flex flex-col items-center justify-center space-y-4">
              <Power className="w-16 h-16 text-blue-400" />
              <h3 className="text-2xl font-bold text-blue-400 [text-shadow:_0_0_10px_rgb(59_130_246_/_50%)]">Spring Boot</h3>
            </div>
          </div>
        </div>

        {/* PostgreSQL Card */}
        <div className="relative group">
          <div className="relative bg-slate-900 rounded-lg p-6 h-full border border-blue-500/20">
            
            <div className="flex flex-col items-center justify-center space-y-4">
              <Database className="w-16 h-16 text-blue-400" />
              <h3 className="text-2xl font-bold text-blue-400 [text-shadow:_0_0_10px_rgb(59_130_246_/_50%)]">PostgreSQL</h3>
            </div>
          </div>
        </div>

        {/* MongoDB Card */}
        <div className="relative group">
          <div className="relative bg-slate-900 rounded-lg p-6 h-full border border-blue-500/20">
            
            <div className="flex flex-col items-center justify-center space-y-4">
              <svg viewBox="0 0 24 24" className="w-16 h-16 text-blue-400" fill="currentColor">
                <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
              </svg>
              <h3 className="text-2xl font-bold text-blue-400 [text-shadow:_0_0_10px_rgb(59_130_246_/_50%)]">MongoDB</h3>
            </div>
          </div>
        </div>

        {/* Python Card */}
        <div className="relative group">
          <div className="relative bg-slate-900 rounded-lg p-6 h-full border border-blue-500/20">
            
            <div className="flex flex-col items-center justify-center space-y-4">
              <svg viewBox="0 0 24 24" className="w-16 h-16 text-blue-400" fill="currentColor">
                <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
              </svg>
              <h3 className="text-2xl font-bold text-blue-400 [text-shadow:_0_0_10px_rgb(59_130_246_/_50%)]">Python</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}